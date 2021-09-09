Module.register("MMM-TitanSchoolMealMenu", {
  defaults: {
    retryDelayMs: 60 * 1000, // milliseconds
    updateIntervalMs: 60 * 60 * 1000, // milliseconds
    numberOfDaysToDisplay: 3,
    recipeCategoriesToInclude: [
      "Main Entree",
      "Grain"
      //   , "Fruit"
      //   , "Vegetable"
      //   , "Milk"
      //   , "Condiment"
      //   , "Extra"
    ]
  },

  requiresVersion: "2.1.0", // Required version of MagicMirror

  start: function () {
    var self = this;

    this.dataNotification = null; // This will contain the (formatted) data from the remote API after each request
    this.dataError = false; // Toggle to true if an API request results in an error
    this.loaded = false; // Toggle to true once this module has configured its API client and is ready to make API requests

    // Send the module config to the node_helper
    this.broadcastConfig({
      retryDelayMs: this.config.retryDelayMs,
      updateIntervalMs: this.config.updateIntervalMs,
      buildingId: this.config.buildingId,
      districtId: this.config.districtId,
      recipeCategoriesToInclude: this.config.recipeCategoriesToInclude
    });

    // Schedule update timer
    setInterval(function () {
      self.getData();
      //   self.updateDom();
    }, self.config.updateIntervalMs);
  },

  broadcastConfig: function (config) {
    this.sendSocketNotification("TITANSCHOOLS_SET_CONFIG", config);
  },

  getData: function () {
    this.sendSocketNotification("TITANSCHOOLS_FETCH_DATA_REQUEST", {});
  },

  scheduleUpdate: function (delay) {
    var nextLoad = this.config.retryDelayMs;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }

    var self = this;
    setTimeout(function () {
      self.getData();
    }, nextLoad);
  },

  getDom: function () {
    var self = this;

    var wrapper = document.createElement("div");

    if (!this.loaded) {
      wrapper.innerHTML =
        "<span class='small fa fa-refresh fa-spin fa-fw'></span>";
      wrapper.className = "small dimmed";
      return wrapper;
    }

    if (this.dataNotification && this.dataError) {
      // The remote API responded with an error which is now stored in this.dataNotification
      wrapper.innerHTML = `<div>${
        this.dataNotification
      }</div><div><span class='small fa fa-refresh fa-spin fa-fw'></span>Retry in ${
        this.config.retryDelayMs / 1000
      } seconds...</div>`;
      wrapper.className = "error";
      return wrapper;
    }

    // Data from helper
    if (this.dataNotification && !this.dataError) {
      console.log(this.dataNotification);
      const wrapperDataNotification = document.createElement("div");

      const meals = document.createElement("ul");
      this.dataNotification.forEach((dayMenu, index) => {
        if (index >= this.config.numberOfDaysToDisplay) {
          return;
        }

        const dayLabel = document.createElement("li");
        dayLabel.innerHTML = dayMenu.label;
        dayLabel.className = "day-label";
        meals.appendChild(dayLabel);

        const breakfastMenuList = document.createElement("ul");
        const breakfastMenuItems = document.createElement("li");
        breakfastMenuItems.innerHTML = `Breakfast: ${
          dayMenu.breakfast ?? "none"
        }`;
        breakfastMenuList.className = "meal-description";
        breakfastMenuList.appendChild(breakfastMenuItems);
        dayLabel.appendChild(breakfastMenuList);

        const lunchMenuList = document.createElement("ul");
        const lunchMenuItems = document.createElement("li");
        lunchMenuItems.innerHTML = `Lunch: ${dayMenu.lunch ?? "none"}`;
        lunchMenuList.className = "meal-description";
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
    return ["MMM-TitanSchoolMealMenu.css"];
  },

  getTranslations: function () {
    return {
      en: "translations/en.json"
      //   es: 'translations/es.json',
    };
  },

  // socketNotificationReceived from helper
  socketNotificationReceived: function (notificationName, payload) {
    console.log(
      `TitanSchools module received notification: ${notificationName}`
    );

    if (notificationName === "TITANSCHOOLS_FETCH_DATA_SUCCESS") {
      this.dataNotification = payload;
      this.dataError = false;
      this.loaded = true;
      this.updateDom();
    }

    if (notificationName === "TITANSCHOOLS_FETCH_DATA_FAILED") {
      console.error(payload);
      console.error(
        `Retrying in ${this.config.retryDelayMs / 1000} seconds...`
      );
      this.scheduleUpdate();

      this.dataNotification = payload;
      this.dataError = true;
      this.loaded = true;
      this.updateDom();
    }

    if (notificationName === "TITANSCHOOLS_CLIENT_READY") {
      this.loaded = true;
      this.getData();
      this.updateDom();
    }
  }
});
