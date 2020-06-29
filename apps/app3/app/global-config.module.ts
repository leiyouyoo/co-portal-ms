import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../app/core';
import { CoMockModule } from '@co/mock';
import { CoConfig, CO_CONFIG } from '@co/core';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import { CoACLModule } from '@co/acl';

const alainConfig: CoConfig = {
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'home', recursiveBreadcrumb: true },
  auth: { login_url: '/passport/login' },
};

const alainModules = [CoACLModule.forRoot(), CoMockModule.forRoot()];
const alainProvides = [{ provide: CO_CONFIG, useValue: alainConfig }];

// mock
import { environment } from '@env/environment';
import * as MOCKDATA from '../../../_mock';
if (!environment.production) {
  alainConfig.mock = { data: MOCKDATA };
}

// #region reuse-tab

import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy, ReuseTabMatchMode } from '@co/cbc';
alainProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService],
} as any);

// #endregion

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...alainModules],
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule, reuseTabService: ReuseTabService) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
    // NOTICE: Only valid for menus with reuse property
    // Pls refer to the E-Mail demo effect
    reuseTabService.mode = ReuseTabMatchMode.MenuForce;
    // Shouled be trigger init, you can ingore when used `reuse-tab` component in layout component
    reuseTabService.init();
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides],
    };
  }
}
