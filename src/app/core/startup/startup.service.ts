import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';

import { CO_I18N_TOKEN, CoConfigManager } from '@co/core';
import { MenuService } from '@co/common';
import { ACLService, ACLType } from '@co/acl';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';

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
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private httpClient: HttpClient,
    private menuService: MenuService,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    this.iconSrv.fetchFromIconfont({
      scriptUrl: CoConfigManager.getValue('iconSrv'),
    });
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      debugger;
      this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`).subscribe((langData) => {
        // 设置语言数据
        this.translate.setTranslation(this.i18n.defaultLang, langData);
        this.translate.use(this.i18n.defaultLang);
        this.translate.setDefaultLang(this.i18n.defaultLang);

        this.httpClient
          .get(CoConfigManager.getValue('serverUrl') + '/platform/Session/GetCurrentUserConfiguration?client=ICP_Web')
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
            (appData) => {
              // 缓存会话数据
              const res: any = appData;
              if (res) {
                window.localStorage.setItem('co.session', JSON.stringify(res));
              }

              //设置权限数据
              this.setupAclData(appData);

              // 初始化菜单
              let menus = [];

              if (appData.nav?.menus?.MainMenu?.items?.length > 0) {
                menus = this.convertMenus(appData.nav.menus.MainMenu.items[0].items as any[]);
              }

              const favoritesMenus = [
                {
                  name: 'FCM_ORDERS',
                  icon: 'icon-menu-default',
                  displayName: '订单管理',
                  order: 20,
                  url: '/fcm/order/orderlist',
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
              ];

              this.menuService.add([
                {
                  key: 'menus',
                  children: menus,
                },
                {
                  key: 'favorites',
                  children: this.convertMenus(favoritesMenus),
                },
              ]);
            },
            () => {},
            () => {
              resolve(null);
            },
          );
      });
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
