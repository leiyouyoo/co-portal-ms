// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`
//appBaseUrl:`http://wechat.cityocean.com:8994` // APP 地址

// const protocol = 'http';
// const serverHost = '192.168.1.5';
// const apiPort = '8000';
// const signalRPort = '8002';
// const serverUrlPrefix = `${protocol}://${serverHost}`;
// const apiUrlPrefix = `${serverUrlPrefix}:${apiPort}`;

export const environment = {
  // serverUrlPrefix: `${protocol}://${serverHost}`,
  // apiUrlPrefix: `${serverUrlPrefix}:${apiPort}`,

  // /* 以下是外部调用的属性 */
  // MOCK_URL: apiUrlPrefix,
  // SERVER_URL: apiUrlPrefix,
  // SignalR_Url: `${serverUrlPrefix}:${signalRPort}`,
  // StoreUrl: apiUrlPrefix,
  // uploadUrl: `${apiUrlPrefix}/Storage/File/Upload`,
  // downloadUrl: `${apiUrlPrefix}/Storage/File/GetDownLoadFile`,
  // appBaseUrl: `http://localhost:4200`, // APP 地址
  // /* im */
  // ImImageUrl: `${serverUrlPrefix}:${apiPort}`,

  // cityoceanId: 2,
  SERVER_URL: '',
  production: false,
  useHash: true,
  hmr: false,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */

//import 'zone.js/dist/zone-error';  //Included with Angular CLI.
