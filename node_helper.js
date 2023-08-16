const NodeHelper = require("node_helper");
const TitanSchoolsClient = require("./TitanSchoolsClient");

module.exports = NodeHelper.create({
  // Subclass start method.
  start: function () {
    var self = this;
    console.log("Starting node helper for: " + self.name);

    // There will be a separate API client for each instance of this module (in case we want to poll
    // multiple school menus)
    self.titanSchoolsClients = {};
  },

  fetchData: async function (instanceName) {
    var self = this;

    if (isObjectEmpty(self.titanSchoolsClients)) {
      console.log(
        `Skipping data fetch because there's no TitanSchools API clients configured`
      );
      return;
    }

    try {
      //   const menu = await this.titanSchoolsClient.fetchMockMenu();
      const menu = await this.titanSchoolsClients[instanceName].fetchMenu();
      this.sendSocketNotification(
        `TITANSCHOOLS_FETCH_DATA_SUCCESS::${instanceName}`,
        menu
      );
    } catch (error) {
      this.sendSocketNotification(
        `TITANSCHOOLS_FETCH_DATA_FAILED::${instanceName}`,
        error.message
      );
      console.error(`Error response from the titanschools API: ${error}`);
    }

    return;
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function (notificationName, payload) {
    var self = this;

    console.log(
      `TitanSchools node_helper received notification: ${notificationName}`
    );

    if (notificationName === "TITANSCHOOLS_SET_CONFIG") {
      console.log(payload);
      self.titanSchoolsClients[payload.instanceName] = new TitanSchoolsClient({
        buildingId: payload.buildingId,
        districtId: payload.districtId,
        recipeCategoriesToInclude: payload.recipeCategoriesToInclude,
        debug: payload.debug,
      });
      this.sendSocketNotification(
        `TITANSCHOOLS_CLIENT_READY::${payload.instanceName}`
      );
    } else if (notificationName.includes(`TITANSCHOOLS_FETCH_DATA_REQUEST`)) {
      self.fetchData(
        extractInstanceNameSuffixFromNotification(notificationName)
      );
    }
  }
});

/**
 * Notifications are named with this pattern: ACTION_NAME::INSTANCE_NAME
 * Where the ACTION_NAME will be something like "TITANSCHOOLS_FETCH_DATA_REQUEST"
 * and the INSTANCE_NAME is the Titan Schools DistrictID concatenated with the BuildingID:
 */
function extractInstanceNameSuffixFromNotification(notificationName) {
  return notificationName.split("::").pop();
}

function isObjectEmpty(obj) {
  let propCount = 0;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      propCount++;
    }
  }
  return propCount === 0;
}
