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

        const dayLabel = document.createElement('li');
        dayLabel.innerHTML = dayMenu.label;
        dayLabel.className = 'day-label';
        meals.appendChild(dayLabel);

        // const breakfastList = document.createElement('ul');
        // const breakfastLabel = document.createElement('li');
        // breakfastLabel.innerHTML = 'Breakfast';
        // breakfastList.appendChild(breakfastLabel);
        // label.appendChild(breakfastList);

        const breakfastMenuList = document.createElement('ul');
        const breakfastMenuItems = document.createElement('li');
        breakfastMenuItems.innerHTML = `Breakfast: ${
          dayMenu.breakfast ?? 'none'
        }`;
        breakfastMenuList.className = 'meal-description';
        breakfastMenuList.appendChild(breakfastMenuItems);
        dayLabel.appendChild(breakfastMenuList);

        // const lunchList = document.createElement('ul');
        // const lunchLabel = document.createElement('li');
        // lunchLabel.innerHTML = 'Lunch';
        // lunchList.appendChild(lunchLabel);
        // dayLabel.appendChild(lunchList);

        const lunchMenuList = document.createElement('ul');
        const lunchMenuItems = document.createElement('li');
        lunchMenuItems.innerHTML = `Lunch: ${dayMenu.lunch ?? 'none'}`;
        lunchMenuList.className = 'meal-description';
        lunchMenuList.appendChild(lunchMenuItems);
        dayLabel.appendChild(lunchMenuList);
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
