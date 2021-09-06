const NodeHelper = require('node_helper');
const TitanSchoolsClient = require('./TitanSchoolsClient');

module.exports = NodeHelper.create({
  // Subclass start method.
  start: function () {
    var self = this;
    console.log('Starting node helper for: ' + self.name);

    self.config = {};
    self.titanSchoolsClient = null;
  },

  fetchData: function () {
    var self = this;

    if (!self.titanSchoolsClient) {
      return;
    }

    this.titanSchoolsClient.fetchMenu().then((response) => {
      console.log(response.data);

      if (response.status?.code === '400') {
        // Do some error handling
      }

      const menusTomorrow = response.data.FamilyMenuSessions.map(
        (menuSession) => {
          return {
            date: menuSession.MenuPlans[0].Days[0].Date,
            breakfastOrLunch: menuSession.ServingSession, // "Breakfast" or "Lunch"
            entree:
              menuSession.MenuPlans[0].Days[0].RecipeCategories[0].Recipes[0]
                .RecipeName,
          };
        }
      );

      const payload = {
        tomorrow: menusTomorrow,
      };

      this.sendSocketNotification('TITANSCHOOLS_FETCH_DATA_SUCCESS', payload);
    });
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function (notificationName, payload) {
    var self = this;

    if (notificationName === 'TITANSCHOOLS_SET_CONFIG') {
      self.config = payload;
      self.titanSchoolsClient = new TitanSchoolsClient({
        buildingId: self.config.buildingId,
        districtId: self.config.districtId,
      });
    }

    if (notificationName === 'TITANSCHOOLS_FETCH_DATA_REQUEST') {
      self.fetchData();
    }
  },
});
