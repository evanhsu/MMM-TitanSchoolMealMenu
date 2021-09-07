# MMM-TitanSchoolMealMenu

#### A module for the MagicMirror framework that retrieves a school meal menu from the Tital Schools API

![Screenshot](./docs/screenshot.png)

## Usage

Add this to your MagicMirror `config.js`:

    {
        module: "MMM-TitanSchoolMealMenu",
        position: "top_left",
        header: "School Menu",
        config: {
            buildingId: '23125610-cbbc-eb11-a2cb-82fe13669c55',
            districtId: '93f76ff0-2eb7-eb11-a2c4-e816644282bd',
        },
    },

## Finding your `buildingId` and `districtId`

Coming soon...
