(function () {
  var protocol = 'http';
  var serverHost = 'api.test.com';
  var apiPort = '20002';
  var signalRHost = 'signalr.dev.om';
  var serverUrlPrefix = protocol + '://' + serverHost;
  var apiUrlPrefix = serverUrlPrefix;

  window.CO_PLATFORM = {
    name: 'co.portal',
    environment: 'dev',
    debug: true,
    serverUrl: apiUrlPrefix,
    signalRUrl: signalRHost,
    storeUrl: apiUrlPrefix,
    loginUrl: '/passport/login',
    uploadUrl: apiUrlPrefix + '/Storage/File/Upload',
    downloadUrl: apiUrlPrefix + '/Storage/File/GetDownLoadFile',
    iconSrv: '//at.alicdn.com/t/font_1909561_c3urmr7ded7.js',
    excelDownloadUrl: apiUrlPrefix + '/Storage/Excel/DownloadExcel',
    appCityoceanUrl: 'https://app.cityocean.com',
    googleApiUrl: 'https://icp.cityocean.com:20001',
    mapbox: {},
    im: {
      ImImageUrl: apiUrlPrefix,
      ImEnable: true,
    },
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
      {
        name: 'crm',
        hostParent: '#app-host-container',
        hostClass: 'crm-layout',
        routerPathPrefix: '/crm',
        selector: 'crm-root',
        resourcePathPrefix: '/apps/crm/',
        manifest: '/apps/crm/manifest.json',
        preload: false,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
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
        name: 'frm',
        hostParent: '#app-host-container',
        hostClass: 'frm-layout',
        routerPathPrefix: '/frm',
        selector: 'frm-root',
        resourcePathPrefix: '/apps/frm/',
        manifest: '/apps/frm/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
    ],
  };
})();
