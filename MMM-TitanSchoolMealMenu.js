Module.register('MMM-TitanSchoolMealMenu', {
  defaults: {
    retryDelayMs: 5000, // milliseconds
    updateIntervalMs: 60 * 60 * 1000, // milliseconds
    buildingId: '23125610-cbbc-eb11-a2cb-82fe13669c55',
    districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
    numberOfDaysToDisplay: 3,
  },

  requiresVersion: '2.1.0', // Required version of MagicMirror

  start: function () {
    var self = this;

    this.dataNotification = null;
    this.loaded = false;

    // Send the module config to the node_helper
    this.broadcastConfig({
      retryDelayMs: this.config.retryDelayMs,
      updateIntervalMs: this.config.updateIntervalMs,
      buildingId: this.config.buildingId,
      districtId: this.config.districtId,
    });

    // Schedule update timer
    setInterval(function () {
      this.getData();
      self.updateDom();
    }, this.config.updateIntervalMs);
  },

  broadcastConfig: function (config) {
    this.sendSocketNotification('TITANSCHOOLS_SET_CONFIG', config);
  },

  getData: function () {
    this.sendSocketNotification('TITANSCHOOLS_FETCH_DATA_REQUEST', {});
  },

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
      console.log(this.dataNotification);
      const wrapperDataNotification = document.createElement('div');

      const meals = document.createElement('ul');
      this.dataNotification.forEach((dayMenu, index) => {
        if (index >= this.config.numberOfDaysToDisplay) {
          return;
        }

        const label = document.createElement('li');
        label.innerHTML = dayMenu.label;
        label.style = 'label';
        meals.appendChild(label);

        const breakfastList = document.createElement('ul');
        const breakfastLabel = document.createElement('li');
        breakfastLabel.innerHTML = 'Breakfast';
        breakfastList.appendChild(breakfastLabel);
        label.appendChild(breakfastList);

        const breakfastMenuList = document.createElement('ul');
        const breakfastMenuItems = document.createElement('li');
        breakfastMenuItems.innerHTML = dayMenu.breakfast ?? 'none';
        breakfastMenuList.appendChild(breakfastMenuItems);
        breakfastLabel.appendChild(breakfastMenuList);

        const lunchList = document.createElement('ul');
        const lunchLabel = document.createElement('li');
        lunchLabel.innerHTML = 'Lunch';
        lunchList.appendChild(lunchLabel);
        label.appendChild(lunchList);

        const lunchMenuList = document.createElement('ul');
        const lunchMenuItems = document.createElement('li');
        lunchMenuItems.innerHTML = dayMenu.breakfast ?? 'none';
        lunchMenuList.appendChild(lunchMenuItems);
        lunchLabel.appendChild(lunchMenuList);
      });

      wrapperDataNotification.appendChild(meals);
      wrapper.appendChild(wrapperDataNotification);
    }

    return wrapper;
  },

  getScripts: function () {
    return [];
  },

  getStyles: function () {
    return ['MMM-TitanSchoolMealMenu.css'];
  },

  getTranslations: function () {
    return {
      en: 'translations/en.json',
      //   es: 'translations/es.json',
    };
  },

  // socketNotificationReceived from helper
  socketNotificationReceived: function (notificationName, payload) {
    console.log(
      `TitanSchools module received notification: ${notificationName}`
    );

    if (notificationName === 'TITANSCHOOLS_FETCH_DATA_SUCCESS') {
      this.dataNotification = payload;
      this.loaded = true;
      this.updateDom();
    }

    if (notificationName === 'TITANSCHOOLS_CLIENT_READY') {
      this.loaded = true;
      this.getData();
      this.updateDom();
    }
  },
});
