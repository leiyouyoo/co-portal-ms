(function () {
  var protocol = 'http';
  var serverHost = 'api.dev.com';
  var apiPort = '20002';
  var signalRHost = 'signalr.dev.com';
  var serverUrlPrefix = protocol + '://' + serverHost;
  var notifyUrl=protocol + '://' + signalRHost;
  var apiUrlPrefix = serverUrlPrefix;

  // var protocol = 'http';
  // var serverHost = 'test-api.cityocean.com';
  // var apiPort = '20001';
  // var signalRPort = '20002';

  // var protocol = 'https';
  // var serverHost = 'uat-api.cityocean.com';
  // var apiPort = '10001';
  // var signalRPort = '10002';
  // var serverUrlPrefix = protocol + '://' + serverHost;
  // var apiUrlPrefix = serverUrlPrefix + ':' + apiPort;


  window.CO_PLATFORM = {
    name: 'co.portal',
    environment: 'dev',
    debug: true,
    serverUrl: apiUrlPrefix,
    signalRUrl: serverUrlPrefix,
    notifyUrl:notifyUrl,
    storeUrl: apiUrlPrefix,
    loginUrl: '/passport/login',
    uploadUrl: apiUrlPrefix + '/Storage/File/Upload',
    downloadUrl: apiUrlPrefix + '/Storage/File/GetDownLoadFile',
    iconSrv: '//at.alicdn.com/t/font_1909561_i4ruamxnh9j.js',
    excelDownloadUrl: apiUrlPrefix + '/Storage/Excel/DownloadExcel',
    appCityoceanUrl: 'https://test-app.cityocean.com',
    googleApiUrl: 'https://test-api.cityocean.com:10001',
    mapbox: {},
    im: {
      ImImageUrl: apiUrlPrefix,
      ImEnable: false,
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
        preload: true,
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
      {
        name: 'pub',
        hostParent: '#app-host-container',
        hostClass: 'pub-layout',
        routerPathPrefix: '/pub',
        selector: 'pub-root',
        resourcePathPrefix: '/apps/pub/',
        manifest: '/apps/pub/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
      {
        name: 'csp',
        hostParent: '#app-host-container',
        hostClass: 'csp-layout',
        routerPathPrefix: '/csp',
        selector: 'csp-root',
        resourcePathPrefix: '/apps/csp/',
        manifest: '/apps/csp/manifest.json',
        preload: true,
        scripts: ['main.js'],
        styles: ['styles.css'],
      },
    ],
  };
})();
