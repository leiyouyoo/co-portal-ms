import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoMockModule } from '@co/mock';
import { CoConfig, CO_CONFIG, CoConfigManager } from '@co/core';
import { CoACLModule } from '@co/acl';
import { CoAuthModule, SimpleInterceptor } from '@co/auth';
import { throwIfAlreadyLoaded } from '@core';

//#region co-libs 全局配置

const coConfig: CoConfig = {
  st: { modal: { size: 'lg' } },
  auth: {
    login_url: CoConfigManager.getValue('loginUrl'),
    token_send_place: 'header',
    token_send_key: 'Authorization',
    token_send_template: 'Bearer ${token}',
    wechat_appid: 'wx4e58692b24a58d6d',
    work_wechat_id: 'wwfa5cf6ff34bcf1d2',
    work_agent_id: 1000048,
    facebook_appid: '288368845636560',
    ignores: [/sso\/connect\/token/, /sso\/account/,/SSO\/Account/,/assets\//, /passport\//, /login\//],
  },
  common: {
    httpClient: {
      SERVER_URL: CoConfigManager.getValue('serverUrl'),
      LOGIN_URL: CoConfigManager.getValue('loginUrl'),
    },
  },
};

const coModules = [CoACLModule.forRoot(), CoMockModule.forRoot(), CoAuthModule];

const coProvides = [
  { provide: CO_CONFIG, useValue: coConfig },
  { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
];

//#endregion

// #region mock配置

import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
if (!environment.production) {
  coConfig.mock = { data: MOCKDATA };
}

// #endregion

// #region  路由复用配置

import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy, ReuseTabMatchMode } from '@co/cms';
coProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService],
} as any);

// #endregion

// #region NG-ZORRO 配置

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
const ngZorroConfig: NzConfig = {};
const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

/**
 * 全局配置模块
 */
@NgModule({
  imports: [...coModules],
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule, reuseTabService: ReuseTabService) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
    // reuseTabService.mode = ReuseTabMatchMode.MenuForce;
    reuseTabService.init();
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...coProvides, ...zorroProvides],
    };
  }
}
