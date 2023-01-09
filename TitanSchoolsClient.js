const axios = require("axios").default;

/**
 * A _very_ lightweight client for the TitanSchools API.
 */
class TitanSchoolsClient {
  constructor(config = {}) {
    if (typeof config.buildingId === "undefined") {
      throw new Error(
        "TitanSchools API client needs a buildingId config value"
      );
    }
    if (typeof config.districtId === "undefined") {
      throw new Error(
        "TitanSchools API client needs a districtId config value"
      );
    }

    this.debug = config.debug === true ? true : false;

    this.requestParams = {
      buildingId: config.buildingId,
      districtId: config.districtId
    };

    this.recipeCategoriesToInclude = config.recipeCategoriesToInclude ?? [
      "Main Entree", // Maybe deprecated?
      "Entrees",
      "Grain"
      // , "Fruit"
      // , "Vegetable"
      // , "Milk"
      // , "Condiment"
      // , "Extra"
    ];

    this.client = axios.create({
      baseURL: "https://family.titank12.com/api/",
      timeout: 30000
    });
  }

  async fetchMockMenu() {
    const data = require("./test/unit/mocks/mockApiResponse");
    return this.processData(data);
  }

  /**
   * Fetches menu data from the TitanSchools API and formats it as shown below
   *
   * @param Date startDate (Optional) A Date object that specifies which day the menu should start on
   * @throws Error If the TitanSchools API responds with a 400- or 500-level HTTP status
   *
   * @returns An array of meals shaped like this (starting on {startDate} and including {config.numberOfDaysToDisplay} days):
   * [
   *   { "date": "9-6-2021", "label": "Today" },
   *   {
   *     "date": "9-7-2021",
   *     "label": "Tomorrow",
   *     "breakfast": "SCRAMBLED EGGS & FRENCH TOAST, APPLE,MIXED FRUIT,JUICE, APPLE 4 OZ.,JUICE, GRAPE 4 OZ.,JUICE, ORANGE 4 OZ., MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP",
   *     "lunch": "STUFFED CHEESE BREADSTICK, COOKIE VARIETY, MARINARA CUP,CARROTS- INDV PACKS, PEACHES SLICED, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP, RANCH CUP"
   *   },
   *   {
   *     "date": "9-8-2021",
   *     "label": "Wednesday",
   *     "breakfast": "CEREAL LUCKY CHARMS GF, CEREAL, CINNAMON TOAST, JUICE, APPLE 4 OZ.,JUICE, GRAPE 4 OZ.,JUICE, ORANGE 4 OZ.,MIXED FRUIT,APPLE, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP",
   *     "lunch": "CHICKEN SANDWICH, BEANS VEGETARIAN, PEARS SLICED, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP, KETCHUP PACKET,RANCH CUP, LETTUCE & PICKLE CUP"
   *   },
   *   {
   *     "date": "9-9-2021",
   *     "label": "Thursday",
   *     "breakfast": "CHERRY FRUDEL, JUICE, APPLE 4 OZ.,JUICE, GRAPE 4 OZ.,JUICE, ORANGE 4 OZ.,MIXED FRUIT,APPLE, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP",
   *     "lunch": "ORANGE CHICKEN, BROWN RICE, GREEN BEANS, APPLE, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP"
   *   },
   *   {
   *     "date": "9-10-2021",
   *     "label": "Friday",
   *     "breakfast": "POP TART, CINNAMON,POP TART, STRAWBERRY, JUICE, APPLE 4 OZ.,JUICE, GRAPE 4 OZ.,JUICE, ORANGE 4 OZ.,PEACHES SLICED, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP",
   *     "lunch": "HAMBURGER, GARDEN SALAD, PEACH CUP ZEE ZEE, MILK CHOCOLATE FF CARTON HP,MILK WHITE 1% CARTON HP, KETCHUP PACKET,MUSTARD PACKET,RANCH CUP, LETTUCE & PICKLE CUP"
   *   }
   * ]
   */
  async fetchMenu(startDate = null) {
    let params = {
      ...this.requestParams,
      // If no startDate was provided, use today's date
      // API requires date to be formatted as: m-d-Y (i.e. 12-5-2021)
      startDate: this.formatDate(startDate ?? new Date())
    };

    if (this.debug) {
      if (startDate === null) {
        console.debug("Using today as startDate");
      } else {
        console.debug(`Using ${startDate} as startDate`);
      }

      // Log the outbound API request
      this.client.interceptors.request.use((request) => {
        console.debug(
          `Sending API request: ${JSON.stringify({
            url: request.url,
            params: request.params
          })}`
        );
        return request;
      });
    }

    try {
      const axiosResponse = await this.client.get("/FamilyMenu", {
        params
      });

      return this.processData(axiosResponse.data);
    } catch (error) {
      if (error.response?.status && error.response.status >= 500) {
        throw new Error(
          `The TitanSchools API is unavailable: ${error.response.data?.error_description}`
        );
      } else if (error.response?.status && error.response.status >= 400) {
        throw new Error(
          `The TitanSchools API sure didn't like the request we sent and responded with: ${
            error.response.data?.error_description || error.response.status
          }. Maybe double check your config values.`
        );
      } else {
        throw error;
      }
    }
  }

  /**
   *
   * @param Date dateObject A Date object
   * @returns string A date string formatted as m-d-Y (1-9-2023)
   */
  formatDate(dateObject) {
    return `${
      dateObject.getMonth() + 1 // javascript month is 0-indexed :facepalm:
    }-${dateObject.getDate()}-${dateObject.getFullYear()}`;
  }

  /**
   * Takes in a raw response body from the TitanSchools API and outputs a normalized array of menus by date.
   * Since the TitanSchools API has the potential to change without warning, this function will isolate breaking
   * API changes and output normalized data that the rest of the functions can assume to be correct.
   *
   * @param Object apiResponse The response body from the TitanSchools API.
   */
  extractMenusByDate(apiResponse) {
    const menus = apiResponse.FamilyMenuSessions.map((menuSession) => {
      // The titank12 API has several possible values for the ServingSession,
      // including "Breakfast", "Lunch", "Seamless Summer Lunch", "Seamless Summer Breakfast".
      const breakfastOrLunch = menuSession.ServingSession.match(/breakfast/i)
        ? "breakfast"
        : "lunch";

      const menusByDate = menuSession.MenuPlans[0].Days.map(
        (menuForThisDate) => {
          // Just for logging/troubleshooting, keep track of all the recipes in this menu and note which ones get
          // intentionally filtered out.
          const recipesToLog = {
            all: [],
            filteredOut: []
          };

          const recipeCategories = menuForThisDate.RecipeCategories.filter(
            (recipeCategory) => {
              recipesToLog.all.push(recipeCategory.CategoryName);

              if (
                this.recipeCategoriesToInclude.includes(
                  recipeCategory.CategoryName
                )
              ) {
                return true;
              } else {
                recipesToLog.filteredOut.push(recipeCategory.CategoryName);
                return false;
              }
            }
          );

          if (this.debug) {
            console.debug(
              `The ${breakfastOrLunch} menu for ${
                menuForThisDate.Date
              } contains the following categories: ${recipesToLog.all.join(
                ", "
              )}, but ${recipesToLog.filteredOut.join(
                ", "
              )} were filtered out because they're not included in the config.recipeCategoriesToInclude array.`
            );
          }

          return {
            date: menuForThisDate.Date,
            breakfastOrLunch,
            menu: recipeCategories
              .map((recipeCategory) => {
                return recipeCategory.Recipes.map(
                  (recipe) => recipe.RecipeName
                ).join(" or ");
              })
              .join(", ")
          };
        }
      );

      return menusByDate;
    });

    if (this.debug) {
      console.debug(
        `Menus extracted from the TitanSchools API response: ${JSON.stringify(
          menus
        )}`
      );
    }

    return menus;
  }

  processData(data) {
    const menus = this.extractMenusByDate(data);

    const upcomingMenuByDate = upcomingRelativeDates().map((day) => {
      // day = { date: '9-6-2021', label: 'Today' }; // Possible labels: 'Today', 'Tomorrow', or a day of the week
      const breakfastAndLunchForThisDay = menus.reduce(
        (menuByMealTime, menu) => {
          const menuForThisDate = menu.filter((menuForOneDate) => {
            const date1 = new Date(menuForOneDate.date);
            const date2 = new Date(day.date);
            return !(date1 > date2) && !(date1 < date2); // Checking for date equality
          });

          if (!menuForThisDate[0]) {
            return menuByMealTime;
          }

          return {
            ...menuByMealTime,
            [menuForThisDate[0].breakfastOrLunch.toLowerCase()]:
              menuForThisDate[0].menu
          };
        },
        {}
      );

      return {
        date: day.date,
        label: day.label,
        breakfast: breakfastAndLunchForThisDay.breakfast,
        lunch: breakfastAndLunchForThisDay.lunch
      };
    });

    console.log(
      `School meal info from titanschools API: ${JSON.stringify(
        upcomingMenuByDate
      )}`
    );

    return upcomingMenuByDate;
  }
}

/**
 * Returns an array of the next 7 dates shaped like this:
 * [
 *   { date: '9-6-2021', label: 'Today' },
 *   { date: '9-7-2021', label: 'Tomorrow' },
 *   { date: '9-8-2021', label: 'Wednesday' },
 *   { date: '9-9-2021', label: 'Thursday' },
 *   { date: '9-10-2021', label: 'Friday' },
 *   { date: '9-11-2021', label: 'Saturday' },
 *   { date: '9-12-2021', label: 'Sunday' }
 * ]
 */
const upcomingRelativeDates = (numberOfDays = 5) => {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let weekOfRelativeDates = [];
  for (let dayOffset = 0; dayOffset < numberOfDays; dayOffset++) {
    const now = new Date();
    let adjustedDate = new Date();
    adjustedDate.setDate(now.getDate() + parseInt(dayOffset, 10));

    const date = `${
      adjustedDate.getMonth() + 1 // javascript month is 0-indexed :facepalm:
    }-${adjustedDate.getDate()}-${adjustedDate.getFullYear()}`;

    let label = "";
    if (dayOffset === 0) {
      label = "Today";
    } else if (dayOffset === 1) {
      label = "Tomorrow";
    } else {
      label = dayOfWeek[adjustedDate.getDay()];
    }

    weekOfRelativeDates.push({
      date,
      label
    });
  }
  return weekOfRelativeDates;
};

// const t = new TitanSchoolsClient({
//   buildingId: '23125610-cbbc-eb11-a2cb-82fe13669c55',
//   districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
// });
// t.fetchMockMenu();

module.exports = TitanSchoolsClient;
