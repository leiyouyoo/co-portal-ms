import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { zip } from 'rxjs';
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
import { environment } from '@env/environment';
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

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`).subscribe((langData) => {
        // 设置语言数据
        this.translate.setTranslation(this.i18n.defaultLang, langData);
        this.translate.use(this.i18n.defaultLang);
        this.translate.setDefaultLang(this.i18n.defaultLang);

        this.httpClient
          .get(CoConfigManager.getValue('serverUrl') + '/platform/Session/GetCurrentUserConfiguration')
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
              // const menus = this.convertMenus(appData.nav.menus.MainMenu.items as any[])
              // this.menuService.add(menus);
              const frmMenus = [
                {
                  name: 'FRM_OceanFees',
                  icon: 'iconsetting',
                  displayName: '海运运价',
                  order: 20,
                  url: '/rates/#/ocean',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FRM_TruckFees',
                  icon: 'iconsetting',
                  displayName: '拖车价格',
                  order: 21,
                  url: '/rates/#/truckingRates',
                  customData: { type: 0, id: 'ba8e5590-d305-4e41-d314-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FRM_LocalFees',
                  icon: 'iconsetting',
                  displayName: '本地费用',
                  order: 22,
                  url: '/rates/#/localfee',
                  customData: { type: 0, id: '343bc33d-f1fd-4c28-d315-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FRM_Quotes',
                  icon: 'iconsetting',
                  displayName: '询价',
                  order: 23,
                  url: '/rates/#/enquiry',
                  customData: { type: 0, id: '4e103430-9069-41cc-d316-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FRM_CustomerInquiries',
                  icon: 'iconsetting',
                  displayName: '运价',
                  order: 25,
                  url: '/rates/#/inquiriesRates',
                  customData: { type: 0, id: '03a83907-2996-4f69-99c8-f83aeabf647e' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
              ];

              const crmMenus = [
                {
                  name: 'PLATFORM_JOB',
                  icon: 'iconsetting',
                  displayName: '职务管理',
                  order: 20,
                  url: '/platform/job',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'PLATFORM_POSITION',
                  icon: 'iconsetting',
                  displayName: '职位管理',
                  order: 20,
                  url: '/platform/position',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FCM_ORDER',
                  icon: 'iconsetting',
                  displayName: '电商物流',
                  order: 20,
                  url: '/fcm/order',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FCM_BILL',
                  icon: 'iconsetting',
                  displayName: '账单管理',
                  order: 20,
                  url: '/fcm/bill',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
              ];

              const favoritesMenus = [
                {
                  name: 'PLATFORM_JOB',
                  icon: 'iconsetting',
                  displayName: '职务管理',
                  order: 20,
                  url: '/platform/job',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'PLATFORM_POSITION',
                  icon: 'iconsetting',
                  displayName: '职位管理',
                  order: 20,
                  url: '/platform/position',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },
                {
                  name: 'FCM_ORDER',
                  icon: 'iconsetting',
                  displayName: '电商物流',
                  order: 20,
                  url: '/fcm/order/orderlist',
                  customData: { type: 0, id: '5fa265c8-54ed-4568-d313-08d7e2a23614' },
                  target: null,
                  isEnabled: true,
                  isVisible: true,
                  items: [],
                },

              ];

              this.menuService.add([
                {
                  key: 'menus',
                  children: [
                    {
                      key: 'FRM',
                      text: '运价管理',
                      children: this.convertMenus(frmMenus),
                    },
                    {
                      key: 'PLATFORM',
                      text: '平台管理',
                      children: this.convertMenus(crmMenus),
                    },
                  ],
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
}
