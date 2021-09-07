const axios = require('axios').default;

class TitanSchoolsClient {
  constructor(config = {}) {
    if (typeof config.buildingId === 'undefined') {
      throw new Error(
        'TitanSchools API client needs a buildingId config value'
      );
    }
    if (typeof config.districtId === 'undefined') {
      throw new Error(
        'TitanSchools API client needs a districtId config value'
      );
    }

    this.requestParams = {
      buildingId: config.buildingId,
      districtId: config.districtId,
    };

    this.client = axios.create({
      baseURL: 'https://family.titank12.com/api/',
      timeout: 2000,
    });
  }

  async fetchMockMenu() {
    const data = {
      FamilyMenuSessions: [
        {
          ServingSession: 'Breakfast',
          MenuPlans: [
            {
              MenuPlanName: '2021/2022 K-5 Breakfast',
              Days: [
                {
                  Date: '9/7/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '8cd11c38-c3e8-eb11-a2c9-c9e02b0c1f03',
                          RecipeIdentifier: 'M-33',
                          RecipeName: 'SCRAMBLED EGGS & FRENCH TOAST',
                          ServingSize:
                            '3 French Sticks & 1.5 oz Scrambled Eggs',
                          GramPerServing: 117.65046249999999,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 227,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 3,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 495,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 25,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'fed3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1796',
                          RecipeName: 'APPLE',
                          ServingSize: 'Apple',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 52,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'ab5b2145-36e3-eb11-a2c6-bacff064a47c',
                          RecipeIdentifier: '9204',
                          RecipeName: 'MIXED FRUIT',
                          ServingSize: '1/2 cup',
                          GramPerServing: 126,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 17,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '801e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1763',
                          RecipeName: 'JUICE, APPLE 4 OZ.',
                          ServingSize: 'Each ',
                          GramPerServing: 113.398,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '9b1e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1764',
                          RecipeName: 'JUICE, GRAPE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 83,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'b61e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1523',
                          RecipeName: 'JUICE, ORANGE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/8/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '71101b30-2bd5-eb11-a2c3-922e3c99d4d8',
                          RecipeIdentifier: '1856',
                          RecipeName: 'CEREAL LUCKY CHARMS GF',
                          ServingSize: 'Bowl',
                          GramPerServing: 28.3495,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 23,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '5443911d-bbfa-eb11-a2c3-881d5bd5e776',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Grain',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'd81b0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1134',
                          RecipeName: 'CEREAL, CINNAMON TOAST',
                          ServingSize: 'Bowl',
                          GramPerServing: 28.3495,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 160,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 22,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '801e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1763',
                          RecipeName: 'JUICE, APPLE 4 OZ.',
                          ServingSize: 'Each ',
                          GramPerServing: 113.398,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '9b1e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1764',
                          RecipeName: 'JUICE, GRAPE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 83,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'b61e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1523',
                          RecipeName: 'JUICE, ORANGE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'ab5b2145-36e3-eb11-a2c6-bacff064a47c',
                          RecipeIdentifier: '9204',
                          RecipeName: 'MIXED FRUIT',
                          ServingSize: '1/2 cup',
                          GramPerServing: 126,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 17,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'fed3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1796',
                          RecipeName: 'APPLE',
                          ServingSize: 'Apple',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 52,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/9/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Grain',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '5dd3e7ec-51d4-eb11-a2c4-87353d5bc03e',
                          RecipeIdentifier: '1845',
                          RecipeName: 'CHERRY FRUDEL',
                          ServingSize: 'Frudel',
                          GramPerServing: 64.920355,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 210,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 260,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 36,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '801e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1763',
                          RecipeName: 'JUICE, APPLE 4 OZ.',
                          ServingSize: 'Each ',
                          GramPerServing: 113.398,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '9b1e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1764',
                          RecipeName: 'JUICE, GRAPE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 83,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'b61e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1523',
                          RecipeName: 'JUICE, ORANGE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'ab5b2145-36e3-eb11-a2c6-bacff064a47c',
                          RecipeIdentifier: '9204',
                          RecipeName: 'MIXED FRUIT',
                          ServingSize: '1/2 cup',
                          GramPerServing: 126,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 17,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'fed3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1796',
                          RecipeName: 'APPLE',
                          ServingSize: 'Apple',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 52,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/10/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Grain',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'c1d0fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1646',
                          RecipeName: 'POP TART, CINNAMON',
                          ServingSize: 'Pouch',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 370,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 380,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 75,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '5443911d-bbfa-eb11-a2c3-881d5bd5e776',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'e4d0fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1647',
                          RecipeName: 'POP TART, STRAWBERRY',
                          ServingSize: 'Pouch',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 360,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 360,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 75,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '5443911d-bbfa-eb11-a2c3-881d5bd5e776',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '801e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1763',
                          RecipeName: 'JUICE, APPLE 4 OZ.',
                          ServingSize: 'Each ',
                          GramPerServing: 113.398,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '9b1e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1764',
                          RecipeName: 'JUICE, GRAPE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 83,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'b61e0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1523',
                          RecipeName: 'JUICE, ORANGE 4 OZ.',
                          ServingSize: 'Each',
                          GramPerServing: 118,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '59d0fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '9031',
                          RecipeName: 'PEACHES SLICED',
                          ServingSize: '1/2 cup',
                          GramPerServing: 124,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
              ],
              AcademicCalenderId: '300f4540-8bc4-eb11-a2c7-8fde11d2b38a',
            },
          ],
        },
        {
          ServingSession: 'Lunch',
          MenuPlans: [
            {
              MenuPlanName: '2021/2022 K-5 Lunch',
              Days: [
                {
                  Date: '9/7/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'ca1b0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1802',
                          RecipeName: 'STUFFED CHEESE BREADSTICK',
                          ServingSize: 'Each',
                          GramPerServing: 57,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 140,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 270,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 15,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Grain',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '00198642-e4fe-eb11-a2ca-b179136cca43',
                          RecipeIdentifier: 'M-46',
                          RecipeName: 'COOKIE VARIETY',
                          ServingSize: 'Each',
                          GramPerServing: 42.524249999999995,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 165,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 117,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 27,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '1aa13c83-60f9-eb11-a2c3-d9e3a901fe8a',
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Vegetable',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '30d2fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1498',
                          RecipeName: 'MARINARA CUP',
                          ServingSize: 'Container',
                          GramPerServing: 70.87375,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 40,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 200,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 7,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: ['9cf76ff0-2eb7-eb11-a2c4-e816644282bd'],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'f9d5fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1830',
                          RecipeName: 'CARROTS- INDV PACKS',
                          ServingSize: 'Package',
                          GramPerServing: 45.3592,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 19,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 31,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 4,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '59d0fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '9031',
                          RecipeName: 'PEACHES SLICED',
                          ServingSize: '1/2 cup',
                          GramPerServing: 124,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 60,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Condiment',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '781d0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1364',
                          RecipeName: 'RANCH CUP',
                          ServingSize: 'Cup',
                          GramPerServing: 28,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 80,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 200,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/8/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '794eaa45-edbf-eb11-a2c5-93d9907f4527',
                          RecipeIdentifier: 'M-2',
                          RecipeName: 'CHICKEN SANDWICH',
                          ServingSize: 'Each',
                          GramPerServing: 146.465975,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 340,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 590,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 40,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Vegetable',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '0135a9d2-a0c4-eb11-a2c7-8fde11d2b38a',
                          RecipeIdentifier: '9198',
                          RecipeName: 'BEANS VEGETARIAN',
                          ServingSize: 'Cup',
                          GramPerServing: 260,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 220,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 280,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 40,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '400b14ce-eae4-eb11-a2c6-bacff064a47c',
                          RecipeIdentifier: '9037',
                          RecipeName: 'PEARS SLICED',
                          ServingSize: '1/2 cup',
                          GramPerServing: 130,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 63,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 5,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 16,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Condiment',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '93cffb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1055',
                          RecipeName: 'KETCHUP PACKET',
                          ServingSize: 'Packet',
                          GramPerServing: 9,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 95,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 3,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: ['837e728a-5ff9-eb11-a2c3-ba13b4b9148a'],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '781d0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1364',
                          RecipeName: 'RANCH CUP',
                          ServingSize: 'Cup',
                          GramPerServing: 28,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 80,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 200,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Extra',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '2b9e0a76-81e5-eb11-a2c5-a50ef61f04ec',
                          RecipeIdentifier: 'M-18',
                          RecipeName: 'LETTUCE & PICKLE CUP',
                          ServingSize: '1/2 cup',
                          GramPerServing: 7.654368999999999,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 99,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/9/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '381c0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1703',
                          RecipeName: 'ORANGE CHICKEN',
                          ServingSize:
                            '4 fl oz spoodle (3.6 oz chicken & sauce)',
                          GramPerServing: 102.0582,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 153,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 286,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 19,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Grain',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '4accb7a4-5ee6-eb11-a2c9-c59ac59649a5',
                          RecipeIdentifier: 'M-28',
                          RecipeName: 'BROWN RICE',
                          ServingSize: '1/2 cup',
                          GramPerServing: 30.016191666666668,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 104,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 21,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Vegetable',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '60f5b8ef-1ed9-eb11-a2c3-93912f83e3ae',
                          RecipeIdentifier: 'M-13',
                          RecipeName: 'GREEN BEANS',
                          ServingSize: '1/2 cup',
                          GramPerServing: 121.94160416666669,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 38,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 158,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 4,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'fed3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1796',
                          RecipeName: 'APPLE',
                          ServingSize: 'Apple',
                          GramPerServing: 100,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 52,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 14,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  Date: '9/10/2021',
                  RecipeCategories: [
                    {
                      CategoryName: 'Main Entree',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'e31a915c-f3bf-eb11-a2c5-b11bab3c9d76',
                          RecipeIdentifier: 'M-4',
                          RecipeName: 'HAMBURGER',
                          ServingSize: 'Each',
                          GramPerServing: 117.24,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 310,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 6,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 347,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 27,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '3b600e8d-16bf-eb11-a2c3-c61aac482cb3',
                            'f42d3f27-60f9-eb11-a2c3-c84b228403a2',
                            '9bf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Vegetable',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '94d48e00-54e6-eb11-a2c9-d2abdd85801a',
                          RecipeIdentifier: 'M-27',
                          RecipeName: 'GARDEN SALAD',
                          ServingSize: 'Cup',
                          GramPerServing: 36.287392,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 6,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 8,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Fruit',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '7fe2d599-73d4-eb11-a2c4-fe8cb6dc41e6',
                          RecipeIdentifier: '1841',
                          RecipeName: 'PEACH CUP ZEE ZEE',
                          ServingSize: 'Each',
                          GramPerServing: 127.57275,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 70,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 18,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Milk',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: 'bfd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1349',
                          RecipeName: 'MILK CHOCOLATE FF CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 240,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 120,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 180,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 20,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '837e728a-5ff9-eb11-a2c3-ba13b4b9148a',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'bbd3fb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1315',
                          RecipeName: 'MILK WHITE 1% CARTON HP',
                          ServingSize: 'Carton',
                          GramPerServing: 236,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 110,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 130,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 13,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Condiment',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '93cffb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1055',
                          RecipeName: 'KETCHUP PACKET',
                          ServingSize: 'Packet',
                          GramPerServing: 9,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 10,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 95,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 3,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: ['837e728a-5ff9-eb11-a2c3-ba13b4b9148a'],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: 'eecffb0d-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1524',
                          RecipeName: 'MUSTARD PACKET',
                          ServingSize: 'Packet',
                          GramPerServing: 5.5,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 4,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 86,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                        {
                          ItemId: '781d0208-39bf-eb11-a2c3-a257492f29f5',
                          RecipeIdentifier: '1364',
                          RecipeName: 'RANCH CUP',
                          ServingSize: 'Cup',
                          GramPerServing: 28,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 80,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 200,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 2,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [
                            '95f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '96f76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '9cf76ff0-2eb7-eb11-a2c4-e816644282bd',
                            '22657378-16bf-eb11-a2c3-fc186683ca00',
                          ],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                    {
                      CategoryName: 'Extra',
                      Color: '#000000',
                      Recipes: [
                        {
                          ItemId: '2b9e0a76-81e5-eb11-a2c5-a50ef61f04ec',
                          RecipeIdentifier: 'M-18',
                          RecipeName: 'LETTUCE & PICKLE CUP',
                          ServingSize: '1/2 cup',
                          GramPerServing: 7.654368999999999,
                          Nutrients: [
                            {
                              Name: 'Calories',
                              Value: 1,
                              HasMissingNutrients: false,
                              Unit: 'kcals',
                              Abbreviation: 'Cal',
                            },
                            {
                              Name: 'Saturated Fat',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Sfat',
                            },
                            {
                              Name: 'Sodium',
                              Value: 99,
                              HasMissingNutrients: false,
                              Unit: 'mg',
                              Abbreviation: 'Na',
                            },
                            {
                              Name: 'Total Carbohydrate',
                              Value: 0,
                              HasMissingNutrients: false,
                              Unit: 'g',
                              Abbreviation: 'Carb',
                            },
                          ],
                          Allergens: [],
                          ReligiousRestrictions: [],
                          DietaryRestrictions: [
                            'a1f76ff0-2eb7-eb11-a2c4-e816644282bd',
                          ],
                          HasNutrients: true,
                        },
                      ],
                    },
                  ],
                },
              ],
              AcademicCalenderId: '300f4540-8bc4-eb11-a2c7-8fde11d2b38a',
            },
          ],
        },
      ],
      AcademicCalendars: [
        {
          AcademicCalendarId: '300f4540-8bc4-eb11-a2c7-8fde11d2b38a',
          Days: [{ Date: '9/6/2021', Note: 'Labor Day' }],
        },
        {
          AcademicCalendarId: '8249c7a1-7de5-eb11-a2c5-ad7a513cdd3b',
          Days: [{ Date: '9/6/2021', Note: 'Labor Day' }],
        },
      ],
    };

    return this.processData(data);
  }

  /**
   * Fetches menu data from the TitanSchools API and formats it as shown below
   *
   * @param string startDate
   * @returns An array of meals shaped like this:
   *
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
      startDate,
    };

    if (startDate === null) {
      console.log('Using today as startDate');
      // If no startDate was provided, use today's date
      // API requires date to be formatted as: m-d-Y (i.e. 12-5-2021)
      const now = new Date();
      params.startDate = `${
        now.getMonth() + 1 // javascript month is 0-indexed :facepalm:
      }-${now.getDate()}-${now.getFullYear()}`;
    } else {
      console.log(`Using ${startDate} as startDate`);
    }

    const axiosResponse = await this.client.get('/FamilyMenu', {
      params,
    });

    return this.processData(axiosResponse.data);
  }

  processData(data) {
    const menus = data.FamilyMenuSessions.map((menuSession) => {
      const breakfastOrLunch = menuSession.ServingSession; // "Breakfast" or "Lunch"
      const menusByDate = menuSession.MenuPlans[0].Days.map(
        (menuForThisDate) => {
          return {
            date: menuForThisDate.Date,
            breakfastOrLunch,
            menu: menuForThisDate.RecipeCategories.filter(
              (recipeCategory) => recipeCategory.CategoryName === 'Main Entree'
            )
              .map((recipeCategory) => {
                return recipeCategory.Recipes.map(
                  (recipe) => recipe.RecipeName
                );
              })
              .join(', '),
          };
        }
      );

      return menusByDate;
    });

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
              menuForThisDate[0].menu,
          };
        },
        {}
      );

      return {
        date: day.date,
        label: day.label,
        breakfast: breakfastAndLunchForThisDay.breakfast,
        lunch: breakfastAndLunchForThisDay.lunch,
      };
    });

    // console.log(
    //   `School meal info from titanschools API: ${JSON.stringify(
    //     upcomingMenuByDate
    //   )}`
    // );

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
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let weekOfRelativeDates = [];
  for (let dayOffset = 0; dayOffset < numberOfDays; dayOffset++) {
    const now = new Date();
    let adjustedDate = new Date();
    adjustedDate.setDate(now.getDate() + parseInt(dayOffset, 10));

    const date = `${
      adjustedDate.getMonth() + 1 // javascript month is 0-indexed :facepalm:
    }-${adjustedDate.getDate()}-${adjustedDate.getFullYear()}`;

    let label = '';
    if (dayOffset === 0) {
      label = 'Today';
    } else if (dayOffset === 1) {
      label = 'Tomorrow';
    } else {
      label = dayOfWeek[adjustedDate.getDay()];
    }

    weekOfRelativeDates.push({
      date,
      label,
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
