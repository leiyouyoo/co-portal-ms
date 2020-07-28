(function () {
  var protocol = 'http';
  var serverHost = '192.168.1.5';
  var apiPort = '8000';
  var signalRPort = '8002';
  var serverUrlPrefix = protocol + '://' + serverHost;
  var apiUrlPrefix = serverUrlPrefix + ':' + apiPort;

  window.CO_PLATFORM = {
    name: 'co.portal',
    environment: 'dev',
    serverUrl: apiUrlPrefix,
    signalRUrl: serverUrlPrefix + ':' + signalRPort,
    storeUrl: apiUrlPrefix,
    loginUrl: '/#/passport/login',
    uploadUrl: apiUrlPrefix + '/Storage/File/Upload',
    downloadUrl: apiUrlPrefix + '/Storage/File/GetDownLoadFile',
    iconSrv: 'https://at.alicdn.com/t/font_1909561_klqzxqh6z5.js',
    mapbox: {},
    im: {},
    apps: [
      {
        name: 'platform',
        hostParent: '#app-host-container',
        hostClass: 'platform-layout',
        routerPathPrefix: '/platform',
        selector: 'platform-root',
        resourcePathPrefix: '/apps/platform/',
        manifest: '/apps/platform/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
      // {
      //   name: 'fcm',
      //   hostParent: '#app-host-container',
      //   hostClass: 'fcm-layout',
      //   routerPathPrefix: '/fcm',
      //   selector: 'fcm-root',
      //   resourcePathPrefix: '/apps/fcm/',
      //   preload: true,
      //   scripts: ['main.js'],
      // },
    ],
  };
})();
