const NodeHelper = require("node_helper");
const TitanSchoolsClient = require("./TitanSchoolsClient");
const moment = require("moment");

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

    const days = this.config.numberOfDaysToDisplay;
    const startDate = this.config.displayCurrentWeek
      ? getFirstDayOfWeek(this.config.weekStartsOnMonday)
      : moment();
    
    const endDate = startDate.clone().add(days, "days");

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
  const today = moment();
  let firstDayOfWeek = moment();

  // moment.isoWeekday() returns 1 for Monday, 7 for Sunday.
  if (weekStartsOnMonday) {
    const weekStartedDaysAgo = today.isoWeekday() - 1;
    firstDayOfWeek = today.subtract(weekStartedDaysAgo, "days");
  } else {
    const weekday = today.isoWeekday();

    if (weekday === 7) {
      firstDayOfWeek = today;
    } else {
      firstDayOfWeek = today.subtract(weekday, "days");
    }
  }

  return firstDayOfWeek.startOf("day");
}