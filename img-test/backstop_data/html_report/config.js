report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Web_Agency_0_document_0_phone.png",
        "test": "../bitmaps_test/20210528-162639/backstop_default_Web_Agency_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Web_Agency_0_document_0_phone.png",
        "label": "Web Agency",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://demosites.io/freelancer/?optml_off=true",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1282
          },
          "misMatchPercentage": "40.97",
          "analysisTime": 90
        },
        "diffImage": "../bitmaps_test/20210528-162639/failed_diff_backstop_default_Web_Agency_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Web_Agency_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210528-162639/backstop_default_Web_Agency_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Web_Agency_0_document_1_tablet.png",
        "label": "Web Agency",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://demosites.io/freelancer/?optml_off=true",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -450
          },
          "misMatchPercentage": "50.85",
          "analysisTime": 195
        },
        "diffImage": "../bitmaps_test/20210528-162639/failed_diff_backstop_default_Web_Agency_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Web_Agency_0_document_2_desktop.png",
        "test": "../bitmaps_test/20210528-162639/backstop_default_Web_Agency_0_document_2_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Web_Agency_0_document_2_desktop.png",
        "label": "Web Agency",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://demosites.io/freelancer/?optml_off=true",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -155
          },
          "misMatchPercentage": "30.95",
          "analysisTime": 270
        },
        "diffImage": "../bitmaps_test/20210528-162639/failed_diff_backstop_default_Web_Agency_0_document_2_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});