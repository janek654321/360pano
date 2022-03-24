var APP_DATA = {
  "scenes": [
    {
      "id": "0-ptak",
      "name": "ptak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.20252725194576726,
        "pitch": 0.3169113094443432,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.7530694490819414,
          "pitch": 0.3992879063808168,
          "rotation": 0,
          "target": "1-partera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-partera",
      "name": "parterA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5859319631695286,
        "pitch": 0.08374597758718494,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -2.323373995244479,
          "pitch": 0.07631795658843288,
          "rotation": 0,
          "target": "0-ptak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Test 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
