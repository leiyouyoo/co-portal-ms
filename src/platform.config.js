(function () {
  // var protocol = 'http';
  // var serverHost = 'dev-api.cityocean.com';
  // var apiPort = '20001';
  // var signalRPort = '20002';
  var protocol = 'http';
  var serverHost = '192.168.1.5';
  var apiPort = '8000';
  var signalRPort = '8002';
  var serverUrlPrefix = protocol + '://' + serverHost;
  var apiUrlPrefix = serverUrlPrefix + ':' + apiPort;

  window.CO_PLATFORM = {
    name: 'co.portal',
    environment: 'dev',
    debug: true,
    serverUrl: apiUrlPrefix,
    signalRUrl: serverUrlPrefix + ':' + signalRPort,
    storeUrl: apiUrlPrefix,
    loginUrl: '/#/passport/login',
    uploadUrl: apiUrlPrefix + '/Storage/File/Upload',
    downloadUrl: apiUrlPrefix + '/Storage/File/GetDownLoadFile',
    iconSrv: '//at.alicdn.com/t/font_1909561_nre5a6u78lq.js',
    excelDownloadUrl: apiUrlPrefix + '/Storage/Excel/DownloadExcel',
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
