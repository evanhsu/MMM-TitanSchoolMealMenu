const TitanSchoolsClient = require("../../TitanSchoolsClient");
const mockApiResponse = require("./mocks/mockApiResponse");

describe("TitanSchoolsClient parses API response correctly", () => {
  let client;
  let config = {
    buildingId: "9017b6ae-a3bc-eb11-a2cb-82fe13669c55",
    districtId: "93f76ff0-2eb7-eb11-a2c4-e816644282bd",
    numberOfDaysToDisplay: 3,
    debug: true
  };

  beforeAll(() => {
    client = new TitanSchoolsClient(config);
  });

  /**
   * These tests confirm that the extractMenusByDate function working properly.
   * It should ultimately output a collection of menus that looks like this:
   *
   *  [
   *   [
   *     { date: '1/18/2023', breakfastOrLunch: 'breakfast', menu: '...' },
   *     { date: '1/19/2023', breakfastOrLunch: 'breakfast', menu: '...' },
   *     { date: '1/20/2023', breakfastOrLunch: 'breakfast', menu: '...' }
   *   ],
   *   [
   *     { date: '1/18/2023', breakfastOrLunch: 'lunch', menu: '...' },
   *     { date: '1/19/2023', breakfastOrLunch: 'lunch', menu: '...' },
   *     { date: '1/20/2023', breakfastOrLunch: 'lunch', menu: '...' }
   *   ]
   * ]
   *
   */
  describe("extractMenusByDate() function", () => {
    it("extracts breakfast and lunch separately from the raw API response", () => {
      const menusByDate = client.extractMenusByDate(mockApiResponse);
      console.log(menusByDate);

      // There should be one array element for breakfast menus and another containing all the lunch menus
      expect(menusByDate.length).toBe(2);

      // Inspect the breakfast menus
      expect(menusByDate[0].length).toBe(config.numberOfDaysToDisplay);
      menusByDate[0].forEach((day) => {
        expect(day.breakfastOrLunch).toBe("breakfast");
      });

      // Inspect the lunch menus
      expect(menusByDate[1].length).toBe(config.numberOfDaysToDisplay);
      menusByDate[1].forEach((day) => {
        expect(day.breakfastOrLunch).toBe("lunch");
      });
    });

    it("extracts a menu (food items) for each breakfast", () => {
      const menusByDate = client.extractMenusByDate(mockApiResponse);

      // Inspect the breakfast menus
      menusByDate[0].forEach((day) => {
        expect(day.breakfastOrLunch).toBe("breakfast");
        try {
          expect(day.menu.length > 0).toBeTruthy();
        } catch (error) {
          throw new Error(
            `No breakfast menu was extracted from the API response on this date: ${JSON.stringify(
              day
            )}. Did the TitanSchools API change the shape of their response?`
          );
        }
      });

      // Inspect the lunch menus
      expect(menusByDate[1].length).toBe(config.numberOfDaysToDisplay);
    });
  });

  it("extracts a menu (food items) for each lunch", () => {
    const menusByDate = client.extractMenusByDate(mockApiResponse);

    // Inspect the lunch menus
    menusByDate[1].forEach((day) => {
      expect(day.breakfastOrLunch).toBe("lunch");
      try {
        expect(day.menu.length > 0).toBeTruthy();
      } catch (error) {
        throw new Error(
          `No lunch menu was extracted from the API response on this date: ${JSON.stringify(
            day
          )}. Did the TitanSchools API change the shape of their response?`
        );
      }
    });

    // Inspect the lunch menus
    expect(menusByDate[1].length).toBe(config.numberOfDaysToDisplay);
  });
});
