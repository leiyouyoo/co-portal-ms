// tslint:disable: no-duplicate-imports
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { default as ngLang } from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NZ_DATE_LOCALE, NZ_I18N, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { zhCN as dateLang } from 'date-fns/locale';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { CO_I18N_TOKEN } from '@co/core';
import { CO_LOCALE, zh_CN as delonLang, CoCommonModule, ResponseInterceptor } from '@co/common';
import { PageLayoutModule } from '@co/cbc';

import { I18NService, StartupService } from '@core';

import { environment } from '@env/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GlobalConfigModule } from './global-config.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { NZ_WAVE_GLOBAL_CONFIG } from 'ng-zorro-antd';

// 图标
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

// 本地化
const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  co: delonLang,
};

// register angular
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: CO_LOCALE, useValue: LANG.co },
];

// 加载i18n语言文件
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];
const I18NSERVICE_PROVIDES = [{ provide: CO_I18N_TOKEN, useClass: I18NService, multi: false }];

// 动态FormJson (using @co/form)
const FORM_MODULES = [];

// Http 拦截器
const INTERCEPTOR_PROVIDES = [{ provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }];

// 启动服务
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];

/**
 * 应用模块
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
    GlobalConfigModule.forRoot(),
    NzIconModule.forRoot(icons),
    CoCommonModule.forRoot({
      environment,
    }),
    CoreModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
    PageLayoutModule,
    ...I18NSERVICE_MODULES,
    ...FORM_MODULES,
  ],
  providers: [
    ...LANG_PROVIDES,
    ...INTERCEPTOR_PROVIDES,
    ...I18NSERVICE_PROVIDES,
    ...APPINIT_PROVIDES,
    {
      provide: NZ_WAVE_GLOBAL_CONFIG,
      useValue: {
        disabled: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
