Module.register("MMM-TitanSchoolMealMenu", {
  defaults: {
    retryDelayMs: 20 * 1000, // milliseconds
    updateIntervalMs: 60 * 60 * 1000, // milliseconds
    numberOfDaysToDisplay: 3,
    size: "medium",
    recipeCategoriesToInclude: [
      "Entrees",
      "Grain"
      //   , "Fruit"
      //   , "Vegetable"
      //   , "Milk"
      //   , "Condiment"
      //   , "Extra"
    ],
    debug: false,
    showWeekends: true
  },

  requiresVersion: "2.1.0", // Required version of MagicMirror

  start: function () {
    var self = this;

    this.dataNotification = null; // This will contain the (formatted) data from the remote API after each request
    this.dataError = false; // Toggle to true if an API request results in an error
    this.loaded = false; // Toggle to true once this module has configured its API client and is ready to make API requests
    // The instanceName is used to "namespace" the notifications when there are multiple instances of the TitanSchoolMealMenu module fetching different school menus
    this.instanceName = `${this.config.buildingId}_${this.config.districtId}`;

    // Send the module config to the node_helper
    this.broadcastConfig({
      retryDelayMs: this.config.retryDelayMs,
      updateIntervalMs: this.config.updateIntervalMs,
      buildingId: this.config.buildingId,
      districtId: this.config.districtId,
      recipeCategoriesToInclude: this.config.recipeCategoriesToInclude,
      instanceName: this.instanceName,
      debug: this.config.debug
    });

    // Schedule update timer
    setInterval(function () {
      self.getData();
      //   self.updateDom();
    }, self.config.updateIntervalMs);
  },

  getNamespacedNotificationName: function (notificationName) {
    return `TITANSCHOOLS_${notificationName}::${this.instanceName}`;
  },

  sendNamespacedSocketNotification: function (notificationName, config) {
    return this.sendSocketNotification(
      this.getNamespacedNotificationName(notificationName),
      config
    );
  },

  broadcastConfig: function (config) {
    // This notification is intentionally *NOT NAMESPACED*
    // This is the first notification that establishes a new instance of the TitaSchoolMealMenu module, so the
    // namespaced notifications haven't been registered yet (the listeners don't know the name of this instance yet).
    this.sendSocketNotification(`TITANSCHOOLS_SET_CONFIG`, config);
  },

  getData: function () {
    this.sendNamespacedSocketNotification(`FETCH_DATA_REQUEST`, {});
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
      meals.className = `meal-list ${this.config.size || ""}`;
      this.dataNotification.forEach((dayMenu, index) => {
        if (index >= this.config.numberOfDaysToDisplay) {
          return;
        } else if (dayMenu.label == "Saturday" && this.config.showWeekends == false) {
          this.config.numberOfDaysToDisplay = this.config.numberOfDaysToDisplay + 1;
          return;
        } else if (dayMenu.label == "Sunday" && this.config.showWeekends == false) {
          this.config.numberOfDaysToDisplay = this.config.numberOfDaysToDisplay + 1;
          return;
        } else if (dayMenu.label == "Today" && !dayMenu.lunch && this.config.showWeekends == false) {
          this.config.numberOfDaysToDisplay = this.config.numberOfDaysToDisplay + 1;
          return;
        } else if (dayMenu.label == "Tomorrow" && !dayMenu.lunch && this.config.showWeekends == false) {
          this.config.numberOfDaysToDisplay = this.config.numberOfDaysToDisplay + 1;
          return;
        }

        // Day list item.
        const dayListItem = document.createElement("li");
        const dayLabel = document.createElement("span");
        dayLabel.className = "day-label";
        dayLabel.innerHTML = dayMenu.label;
        dayListItem.appendChild(dayLabel);
        meals.appendChild(dayListItem);

        // Breakfast.
        const breakfastMenuList = document.createElement("ul");
        const breakfastMenuItems = document.createElement("li");
        const breakfastMenuTitle = document.createElement("span");
        const breakfastMenuRecipes = document.createElement("span");

        breakfastMenuTitle.innerHTML = "Breakfast: ";
        breakfastMenuTitle.className = "meal-title";
        breakfastMenuRecipes.innerHTML = dayMenu.breakfast ?? "none";
        breakfastMenuRecipes.className = "meal-recipes";

        breakfastMenuList.className = "breakfast-description";
        breakfastMenuList.appendChild(breakfastMenuItems);
        breakfastMenuItems.appendChild(breakfastMenuTitle);
        breakfastMenuItems.appendChild(breakfastMenuRecipes);
        dayListItem.appendChild(breakfastMenuList);

        // Lunch.
        const lunchMenuList = document.createElement("ul");
        const lunchMenuItems = document.createElement("li");
        const lunchMenuTitle = document.createElement("span");
        const lunchMenuRecipes = document.createElement("span");

        lunchMenuTitle.innerHTML = "Lunch: ";
        lunchMenuTitle.className = "meal-title";
        lunchMenuRecipes.innerHTML = dayMenu.lunch ?? "none";
        lunchMenuRecipes.className = "meal-recipes";

        lunchMenuList.className = "lunch-description";
        lunchMenuList.appendChild(lunchMenuItems);
        lunchMenuItems.appendChild(lunchMenuTitle);
        lunchMenuItems.appendChild(lunchMenuRecipes);
        dayListItem.appendChild(lunchMenuList);
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
      `TitanSchools module (${this.instanceName}) received notification: ${notificationName}`
    );

    if (
      notificationName ===
      this.getNamespacedNotificationName("FETCH_DATA_SUCCESS")
    ) {
      this.dataNotification = payload;
      this.dataError = false;
      this.loaded = true;
      this.updateDom();
    }

    if (
      notificationName ===
      this.getNamespacedNotificationName("FETCH_DATA_FAILED")
    ) {
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

    if (
      notificationName === this.getNamespacedNotificationName("CLIENT_READY")
    ) {
      this.loaded = true;
      this.getData();
      this.updateDom();
    }
  }
});
