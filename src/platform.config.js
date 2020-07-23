window.CO_PLATFORM={
  "name": "co.portal",
  "version": "0.0.1",
  "apiBase":"",
  "signalBase":"",
  "mapbox":{
  },
  "im":{
  },
  "apps":[
    {
      "name":"platform",
      "hostParent": "#app-host-container",
      "hostClass": "platform-layout",
      "routerPathPrefix": "/platform",
      "selector": "platform-root",
      "resourcePathPrefix": "/apps/platform/",
      "manifest":"manifest.json",
      "preload": true,
      "scripts": [
        "main.js"
      ]
    },
    // {
    //   "name":"fcm",
    //   "hostParent": "#app-host-container",
    //   "hostClass": "fcm-layout",
    //   "routerPathPrefix": "/fcm",
    //   "selector": "fcm-root",
    //   "resourcePathPrefix": "/apps/fcm/",
    //   "preload": true,
    //   "scripts": [
    //     "main.js"
    //   ]
    // }
  ]
}

