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

  fetchData: async function () {
    var self = this;

    if (!self.titanSchoolsClient) {
      return;
    }

    // const menu = await this.titanSchoolsClient.fetchMockMenu();
    const menu = await this.titanSchoolsClient.fetchMenu();
    this.sendSocketNotification('TITANSCHOOLS_FETCH_DATA_SUCCESS', menu);
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
      this.sendSocketNotification('TITANSCHOOLS_CLIENT_READY');
    }

    if (notificationName === 'TITANSCHOOLS_FETCH_DATA_REQUEST') {
      self.fetchData();
    }
  },
});
