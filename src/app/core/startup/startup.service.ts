import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TranslateService } from '@ngx-translate/core';
import { CO_I18N_TOKEN } from '@co/core';
import { MenuService } from '@co/common';
import { NzIconService } from 'ng-zorro-antd/icon';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';
import { environment } from '@env/environment';
import { ACLService, ACLType } from '@co/acl';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable({ providedIn: "root" })
export class StartupService {
  constructor(
    private iconSrv: NzIconService,
    private translate: TranslateService,
    private aclService: ACLService,
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private httpClient: HttpClient,
    private menuService: MenuService,

  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    this.iconSrv.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_1909561_klqzxqh6z5.js',
    });
  }


  setupAclData(sessionData: any) {
    const positions: any[] = sessionData?.session?.user?.positions.map(p => p.positionName);
    const jobs: any[] = sessionData?.session?.user?.positions.map(p => p.jobName);
    const organizationUnits: any[] = sessionData?.session?.user?.positions.map(p => p.organizationUnitName);
    const roles: any[] = sessionData?.session?.user?.roles;
    const abilities: any[] = sessionData?.auth?.grantedFunctionPermissions;
    const acls: ACLType = {
      roles,
      abilities,
      positions,
      jobs,
      organizationUnits
    }
    this.aclService.set(acls)
  }


  /**
   * 递归访问整个树
   */
  convertMenus(
    menus: NzSafeAny[]
  ): any[] {
    const inFn = (data: NzSafeAny[], parent: NzSafeAny, newMenus: any[]) => {
      for (const item of data) {
        const newMenu = {
          text: item.displayName,
          il8N: item.displayName,
          link: item.url,
          icon: item.icon,
          children: []
        };

        const childrenVal = item.items;
        if (childrenVal && childrenVal.length > 0) {
          inFn(childrenVal, item, newMenu.children);
        }

        newMenus.push(newMenu);
      }
    };

    const newMenus: any[] = [];
    inFn(menus, null, newMenus);

    return newMenus;
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      zip(
        this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get(environment.SERVER_URL + '/platform/Session/GetCurrentUserConfiguration'),
      )
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError((res) => {
            window.localStorage.removeItem('_token');
            console.warn(`StartupService.load: Network request failed`, res);
            resolve(null);
            return [];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            // setting language data

            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.use(this.i18n.defaultLang);
            this.translate.setDefaultLang(this.i18n.defaultLang);

            this.setupAclData(appData);

            // 初始化菜单
            const menus = this.convertMenus(appData.nav.menus.MainMenu.items as any[])
            this.menuService.add(menus);

            // application data
            const res: any = appData;
            if (res) {
              window.localStorage.setItem('co.session', JSON.stringify(res));
            }
          },
          () => { },
          () => {
            resolve(null);
          },
        );
    });
  }
}
