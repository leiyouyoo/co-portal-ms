(function () {
  var protocol = 'https';
  var serverHost = 'uat-api.cityocean.com';
  var apiPort = '10001';
  var signalRPort = '10002';
  var serverUrlPrefix = protocol + '://' + serverHost;
  var apiUrlPrefix = serverUrlPrefix + ':' + apiPort;
  // var protocol = 'http';
  // var serverHost = 'test-api.cityocean.com';
  // var apiPort = '20001';
  // var signalRPort = '20002';
  // var serverUrlPrefix = protocol + '://' + serverHost;
  // var apiUrlPrefix = serverUrlPrefix + ':' + apiPort;

  window.CO_PLATFORM = {
    name: 'co.portal',
    environment: 'dev',
    debug: true,
    serverUrl: apiUrlPrefix,
    signalRUrl: serverUrlPrefix + ':' + signalRPort,
    storeUrl: apiUrlPrefix,
    loginUrl: '/passport/login',
    uploadUrl: apiUrlPrefix + '/Storage/File/Upload',
    downloadUrl: apiUrlPrefix + '/Storage/File/GetDownLoadFile',
    iconSrv: '//at.alicdn.com/t/font_1909561_e9sz5zvtum.js',
    excelDownloadUrl: apiUrlPrefix + '/Storage/Excel/DownloadExcel',
    appCityoceanUrl: 'https://test-app.cityocean.com',
    googleApiUrl: 'https://test-api.cityocean.com:10001',
    mapbox: {},
    im: {
      ImImageUrl: apiUrlPrefix,
      ImEnable: true,
    },
    apps: [
      {
        name: 'fcm',
        hostParent: '#app-host-container',
        hostClass: 'fcm-layout',
        routerPathPrefix: '/fcm',
        selector: 'fcm-root',
        resourcePathPrefix: '/apps/fcm/',
        manifest: '/apps/fcm/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
      {
        name: 'fam',
        hostParent: '#app-host-container',
        hostClass: 'fam-layout',
        routerPathPrefix: '/fam',
        selector: 'fam-root',
        resourcePathPrefix: '/apps/fam/',
        manifest: '/apps/fam/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
      {
        name: 'wf',
        hostParent: '#app-host-container',
        hostClass: 'wf-layout',
        routerPathPrefix: '/wf',
        selector: 'wf-root',
        resourcePathPrefix: '/apps/wf/',
        manifest: '/apps/wf/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
    ],
  };
})();
