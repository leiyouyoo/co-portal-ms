import { enableProdMode, NgModuleRef, Type, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PlanetPortalApplication, defineApplication } from '../../packages/planet/src/public-api';
import { AppRootContext } from '../common';

if (environment.production) {
  enableProdMode();
}

console.log('defineApplication app32222222');

// defineApplication('app3', (portalApp: PlanetPortalApplication) => {
//   return platformBrowserDynamic([
//     {
//       provide: PlanetPortalApplication,
//       useValue: portalApp
//     },
//     {
//       provide: AppRootContext,
//       useValue: portalApp.data.appRootContext
//     }
//   ])
//     .bootstrapModule(AppModule)
//     .then(appModule => {
//       return appModule;
//     })
//     .catch(error => {
//       console.error(error);
//       return null;
//     });
// });
