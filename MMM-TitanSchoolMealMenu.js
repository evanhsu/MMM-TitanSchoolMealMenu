Module.register('MMM-TitanSchoolMealMenu', {
  defaults: {
    retryDelayMs: 5000, // milliseconds
    updateIntervalMs: 60000, // milliseconds (60000ms == 1 minute)
    buildingId: '23125610-cbbc-eb11-a2cb-82fe13669c55',
    districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
  },

  requiresVersion: '2.1.0', // Required version of MagicMirror

  start: function () {
    var self = this;

    this.dataNotification = null;

    //Flag for check if module is loaded
    this.loaded = false;

    // Send the module config to the node_helper
    this.broadcastConfig({
      retryDelayMs: this.config.retryDelayMs,
      updateIntervalMs: this.config.updateIntervalMs,
      buildingId: this.config.buildingId,
      districtId: this.config.districtId,
    });

    // Schedule update timer.
    this.getData();
    setInterval(function () {
      self.updateDom();
    }, this.config.updateIntervalMs);
  },

  broadcastConfig: function (config) {
    this.sendSocketNotification('TITANSCHOOLS_SET_CONFIG', config);
  },

  /*
   * getData
   * function example return data and show it in the module wrapper
   * get a URL request
   *
   */
  getData: function () {
    this.sendSocketNotification('TITANSCHOOLS_FETCH_DATA_REQUEST', {});
  },

  /* scheduleUpdate()
   * Schedule next update.
   *
   * argument delay number - Milliseconds before next update.
   *  If empty, this.config.updateInterval is used.
   */
  scheduleUpdate: function (delay) {
    var nextLoad = this.config.updateInterval;
    if (typeof delay !== 'undefined' && delay >= 0) {
      nextLoad = delay;
    }
    nextLoad = nextLoad;
    var self = this;
    setTimeout(function () {
      self.getData();
    }, nextLoad);
  },

  getDom: function () {
    var self = this;

    var wrapper = document.createElement('div');

    if (!this.loaded) {
      wrapper.innerHTML =
        "<span class='small fa fa-refresh fa-spin fa-fw'></span>";
      wrapper.className = 'small dimmed';
      return wrapper;
    }

    // Data from helper
    if (this.dataNotification) {
      var wrapperDataNotification = document.createElement('div');
      wrapperDataNotification.innerHTML = `${this.translate('UPDATE')}: ${
        this.dataNotification.tomorrow[0].entree
      }`;
      wrapper.appendChild(wrapperDataNotification);
    }

    return wrapper;
  },

  getScripts: function () {
    // return [this.file('constants.js')];
    return [];
  },

  getStyles: function () {
    return ['MMM-TitanSchoolMealMenu.css'];
  },

  // Load translations files
  getTranslations: function () {
    //FIXME: This can be load a one file javascript definition
    return {
      en: 'translations/en.json',
      //   es: 'translations/es.json',
    };
  },

  // socketNotificationReceived from helper
  socketNotificationReceived: function (notificationName, payload) {
    if (notificationName === 'TITANSCHOOLS_FETCH_DATA_SUCCESS') {
      this.dataNotification = payload;
      this.loaded = true;
      this.updateDom();
    }
  },
});
