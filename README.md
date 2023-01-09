# MMM-TitanSchoolMealMenu

A module for the MagicMirror framework that retrieves a school meal menu from the Titan Schools API (family.titank12.com)

---

![Screenshot](./docs/screenshot.png)

## Usage

Add this to your MagicMirror `config.js`:

    {
        module: "MMM-TitanSchoolMealMenu",
        position: "top_left",
        header: "School Menu",
        config: {
            size: 'medium', // Optional: 'small', 'medium', 'large'; Default: 'medium'
            buildingId: '23125610-cbbc-eb11-a2cb-82fe13669c55',
            districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
            updateIntervalMs: 3600000, // Optional: Milliseconds between updates; Default: 3600000 (1 hour)
            numberOfDaysToDisplay: 3, // Optional: 0 - 5; Default: 3
            recipeCategoriesToInclude: [
                "Entrees",
                "Grain"
                // , "Fruit"
                // , "Vegetable"
                // , "Milk"
                // , "Condiment"
                // , "Extra"
            ],
            debug: false // Optional: boolean; Default: false; Setting this to true will output verbose logs
        },
    },

You can also track multiple school menus by listing the module multiple times in your `config.js` file (each config will probably have a different `buildingId`/`districtId`):

    {
        module: "MMM-TitanSchoolMealMenu",
        position: "top_right",
        header: "The Derek Zoolander Center for Kids Who Can't Read Good and Wanna Learn to Do Other Stuff Good Too.",
        config: {
            buildingId: '7833a90f-a4bc-eb11-a2cb-8711b287b526',
            districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
        },
    },
    {
        module: "MMM-TitanSchoolMealMenu",
        position: "top_left",
        header: "School for Kid #1",
        config: {
            buildingId: "9017b6ae-a3bc-eb11-a2cb-82fe13669c55",
            districtId: "93f76ff0-2eb7-eb11-a2c4-e816644282bd",
        }
    },

![Multiple Schools](./docs/multiple-schools.png)

---

## Finding your `buildingId` and `districtId`

#### 1. Go to the Titan Schools webpage and search for your school district: https://family.titank12.com/

![Search for your school district](./docs/step1.png)

#### 2. Enter your state (or refine with city and state)

![Use the search box to search by city/state](./docs/step2.png)

#### 3. Use your browser's developer tools to inspect a request to the `/FamilyMenu` endpoint. The `districtId` and `buildingId` will be present as query string parameters on these requests.

![Use developer tools to inspect a network request](./docs/step3.png)
