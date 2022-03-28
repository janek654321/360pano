var APP_DATA = {
  "scenes": [
    {
      "id": "0-xlo-z-lotu-ptaka",
      "name": "XLO z lotu ptaka",
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
        "yaw": -0.23330503136737235,
        "pitch": 0.29311092155516505,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.7586052435806607,
          "pitch": 0.40186073753148577,
          "rotation": 0,
          "target": "1-budynek-a-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-budynek-a-parter",
      "name": "Budynek A: parter",
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
        "yaw": 0.908283590323574,
        "pitch": 0.03694675481788856,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.5889878864551168,
          "pitch": 0.0714330614603238,
          "rotation": 0,
          "target": "2-budynek-a-pitro-1"
        },
        {
          "yaw": -2.2926451614288723,
          "pitch": 0.14584129847117566,
          "rotation": 0,
          "target": "0-xlo-z-lotu-ptaka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-budynek-a-pitro-1",
      "name": "Budynek A: piętro 1.",
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
        "yaw": 2.6890444320038105,
        "pitch": -0.12131377813716782,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.8501291707840561,
          "pitch": -0.012664421195623277,
          "rotation": 0,
          "target": "3-budynek-a-pitro-2"
        },
        {
          "yaw": -0.2249993429452335,
          "pitch": 0.23967866407950034,
          "rotation": 3.141592653589793,
          "target": "2-budynek-a-pitro-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-budynek-a-pitro-2",
      "name": "Budynek A: piętro 2.",
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
        "yaw": 2.598420036045191,
        "pitch": 0.09852467951432686,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.9536269959281434,
          "pitch": -0.009285028119759176,
          "rotation": 0.7853981633974483,
          "target": "4-budynek-a-informatyka"
        },
        {
          "yaw": -0.3854781488839798,
          "pitch": 0.3037485902431083,
          "rotation": 3.141592653589793,
          "target": "2-budynek-a-pitro-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-budynek-a-informatyka",
      "name": "Budynek A: informatyka",
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
        "yaw": 1.5520705243661386,
        "pitch": 0.06896727566005723,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 2.4925548807897453,
          "pitch": 0.027588369350855402,
          "rotation": 6.283185307179586,
          "target": "3-budynek-a-pitro-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wirtualny spacer po XLO",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
