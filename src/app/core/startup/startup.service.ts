import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';

import _ from 'lodash';
import { CO_I18N_TOKEN, CoConfigManager, ArrayService, CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';
import { MenuService, CoSessionService, CoAuthService } from '@co/common';

import { ACLService, ACLType } from '@co/acl';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';
import { GetUserSigService } from '@im';
import { SettingsService } from '@co/common';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable({ providedIn: 'root' })
export class StartupService {
  constructor(
    private iconSrv: NzIconService,
    private translate: TranslateService,
    private aclService: ACLService,
    private loginService: CoAuthService,
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private httpClient: HttpClient,
    private arrayService: ArrayService,
    private menuService: MenuService,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
    private getUserSigService: GetUserSigService,
    private settingsService: SettingsService,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    this.loginService.fbLibrary();
    if (CoConfigManager.getValue('iconSrv')) {
      this.iconSrv.fetchFromIconfont({
        scriptUrl: CoConfigManager.getValue('iconSrv'),
      });
    }
  }

  load(): Promise<any> {
    var lang = window.localStorage.getItem('language') || navigator.language;
    const langMap = {
      'zh-CN': 'zh-Hans',
      'en-US': 'en',
    };
    if (!langMap[lang]) {
      lang = 'en-US';
    }

    this.i18n.use(lang);
    this.settingsService.setLayout('lang', lang);

    return new Promise((resolve) => {
      this.httpClient
        .get(CoConfigManager.getValue('serverUrl') + '/platform/Session/GetCurrentUserConfiguration?client=ICP_Web', {
          headers: { '.AspNetCore.Culture': langMap[lang], 'Accept-Language': langMap[lang] },
        })
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError((res) => {
            window.localStorage.removeItem('_token');
            resolve(null);
            return [];
          }),
        )
        .subscribe(
          (appData) => {
            // 缓存会话数据
            this.sessionService.set(appData);

            try {
              const im = CoConfigManager.getValue('im');
              im.ImEnable && this.getUserSigService.imLogin();
            } catch {}

            //设置权限数据
            this.setupAclData(appData);

            // 初始化菜单
            let menus = [];

            if (appData.nav?.menus?.MainMenu?.items?.length > 0) {
              menus = this.convertMenus(appData.nav.menus.MainMenu.items[0].items as any[]);
            }

            const ms = this.arrayService.treeToArr(menus, { clearChildren: false });
            const favorites = [];
            favorites.push({
              key: 'home',
              text: '首页',
              il8N: 'app.home',
              link: '/dashboard',
              icon: 'icon-logo',
            });
            favorites.push(
              ..._.take(
                ms.filter((m) => !!m.link),
                10,
              ),
            );
            this.menuService.add([
              {
                key: 'menus',
                children: menus,
              },
              {
                key: 'favorites',
                children: favorites,
              },
            ]);
          },
          () => {},
          () => {
            this.httpClient.get(`assets/i18n/${lang}.json?hash=` + new Date().getTime()).subscribe(
              (langData) => {
                // 设置语言数据
                this.translate.setTranslation(lang, langData);
                this.translate.use(lang);
                this.translate.setDefaultLang(lang);
              },
              () => {},
              () => {
                resolve(null);
              },
            );
          },
        );
    });
  }

  setupAclData(sessionData: any) {
    const positions: any[] = sessionData?.session?.user?.positions.map((p) => p.positionName);
    const jobs: any[] = sessionData?.session?.user?.positions.map((p) => p.jobName);
    const organizationUnits: any[] = sessionData?.session?.user?.positions.map((p) => p.organizationUnitName);
    const roles: any[] = sessionData?.session?.user?.roles;
    const abilities: any[] = sessionData?.auth?.grantedFunctionPermissions;
    const acls: ACLType = {
      roles,
      abilities,
      positions,
      jobs,
      organizationUnits,
    };
    this.aclService.set(acls);
  }

  /**
   * 递归访问整个树
   */
  convertMenus(menus: NzSafeAny[]): any[] {
    const inFn = (data: NzSafeAny[], parent: NzSafeAny, newMenus: any[]) => {
      for (const item of data) {
        const newMenu = {
          key: item.name,
          text: item.displayName,
          il8N: item.displayName,
          link: item.url,
          icon: item.icon,
          children: [],
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
}
