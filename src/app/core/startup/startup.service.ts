import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CO_I18N_TOKEN } from '@co/common';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';
import { environment } from '@env/environment';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    private iconSrv: NzIconService,
    private translate: TranslateService,
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private httpClient: HttpClient,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    this.iconSrv.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_1909561_klqzxqh6z5.js',
    });
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      zip(
        this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get(environment.SERVER_URL + '/platform/Session/GetCurrentUserConfiguration'),
      )
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError((res) => {
            console.warn(`StartupService.load: Network request failed`, res);
            resolve(null);
            return [];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            // setting language data

            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);

            // application data
            const res: any = appData;
            if (res) {
              window.localStorage.setItem('ICPUserMsg', JSON.stringify(res));
            }
          },
          () => {},
          () => {
            resolve(null);
          },
        );
    });
  }
}
