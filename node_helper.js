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

    const startDate = this.config.displayCurrentWeek
      ? getFirstDayOfWeek(this.config.weekStartsOnMonday)
      : new Date(Date.now());

    var endDate = new Date(Date.now());
    endDate.setDate(startDate.getDate() + this.config.numberOfDaysToDisplay);

    try {
      //   const menu = await this.titanSchoolsClient.fetchMockMenu();
      const menu = await this.titanSchoolsClients[instanceName].fetchMenu(startDate, endDate);
      this.sendSocketNotification(
        `TITANSCHOOLS_FETCH_DATA_SUCCESS::${instanceName}`,
        menu
      );
    } catch (error) {
      this.sendSocketNotification(
        `TITANSCHOOLS_FETCH_DATA_FAILED::${instanceName}`,
        error.message
      );
      console.error(`Error response from the TitanSchools API: ${error}`);
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
        numberOfDaysToDisplay: payload.numberOfDaysToDisplay,
        debug: payload.debug,
      });
      this.config = payload;
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

function getFirstDayOfWeek(weekStartsOnMonday) {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0-6, where 0 is Sunday.

  let firstDayOfWeek = new Date(today);

  if (weekStartsOnMonday) {
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    firstDayOfWeek.setDate(today.getDate() - daysToSubtract);
  } else {
    firstDayOfWeek.setDate(today.getDate() - dayOfWeek);
  }

  firstDayOfWeek.setHours(0, 0, 0, 0);  // Set time to start of day.

  return firstDayOfWeek;
}
