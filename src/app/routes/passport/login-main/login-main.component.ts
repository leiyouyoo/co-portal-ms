import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient, CoAuthService } from '@co/common';
import { MenuService } from '@co/common';
import { ACLService, ACLType } from '@co/acl';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { NzNotificationService, NzMessageService } from 'ng-zorro-antd';
// import { GetUserSigService, logOut } from '@im';
@Component({
  selector: 'user-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.less'],
})
export class loginMainComponent implements OnInit {
  @Output() forgotPassword = new EventEmitter<null>();
  validateForm: FormGroup;
  errorTip = '';
  savedUser;
  loading = false;
  passwordVisible = false;
  password: string;
  nameIsRight: boolean = false;
  formCheck: boolean = false;
  passMayError: boolean = false;
  accMayError: boolean = false;

  constructor(
    private fb: FormBuilder,
    public loginService: CoAuthService,
    private router: Router,
    public httpService: _HttpClient,
    private notification: NzNotificationService,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private aclService: ACLService,
    private menuService: MenuService, // private getUserSigService: GetUserSigService,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // tenantId: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
    this.savedUser = this.loginService.getSavedUser() || {};

    // 微信登录
    if (this.getQueryString()['loginType'] == 'wechat' && this.getQueryString()['code']) {
      this.thirdLogin('WechatWeb', this.getQueryString()['code']);
    } else if (this.getQueryString()['loginType'] == 'workwechat' && this.getQueryString()['code']) {
      this.thirdLogin('WorkWechat', this.getQueryString()['code']);
    } else if (this.getQueryString()['errorText']) {
      let msg = this.getQueryString()['errorText'].replace(/["]/g, ' ');
      console.log(msg, 'msg');
      this.message.error(msg.replace(/[%20,%22]/g, ' '));
    }
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  thirdLogin(type, code) {
    let parame = {
      externalProvider: type,
      externalAccessCode: code,
    };

    this.loginService
      .thirdLogin(parame)
      .then((res: any) => {
        if (res.access_token) {
          this.doRedirect({ isRedirectByQueryParam: true, isLoginIm: true });
        }
      })
      .catch((e: any) => {
        this.message.error(e.error.error_description);
      });
  }

  login() {
    // this.formCheck = true;
    if (!this.validateForm.valid) {
      return;
    }
    // if(!this.nameIsRight){ return };
    // this.errorTip = '';
    let obj = this.validateForm.value;
    /*
要改为输入pchkh01@cityocean.com，租户为8
要改为输入pchkh02@cityocean.com，租户为9
要改为输入pchkh03@cityocean.com，租户为10
要改为输入pchkh04@cityocean.com，租户为11*/
    let map: { [key: string]: number } = {
      'seller01@cityocean.com': 2,
      'seller02@cityocean.com': 2,
      'seller03@cityocean.com': 2,
      'pchkh01@cityocean.com': 8,
      'pchkh02@cityocean.com': 9,
      'pchkh03@cityocean.com': 10,
      'pchkh04@cityocean.com': 11,
    };
    let tenantId = map[obj.userName] ? map[obj.userName] : 1;

    this.loading = true;
    this.loginService
      .login(obj.userName, obj.password, obj.remember)
      .finally(() => (this.loading = false))
      .then((res: any) => {
        if (res.access_token) {
          this.doRedirect({ isRedirectByQueryParam: true, isLoginIm: true });
        } else {
          this.message.error('登录失败');
        }
      })
      .catch((e: any) => {
        console.log(e);
        this.errorTip = e.error.error_description;
        console.log(this.errorTip, 'errorTip');
      });
  }

  onUsernameKeyup(e) {
    const reg = /^[a-zA-Z\d\@\-\.]+$/g;
    this.accMayError = false;
    this.errorTip = '';
    this.nameIsRight = this.validateForm.controls.userName.value && reg.test(this.validateForm.controls.userName.value);
    if (!(e instanceof KeyboardEvent)) {
      if (this.savedUser.username === this.validateForm.value.userName && !this.validateForm.value.password) {
        this.validateForm.controls.password.setValue(this.savedUser.password);
      }
    }
  }

  onPasswordKeyup(e) {
    this.passMayError = false;
    this.errorTip = '';
  }

  tip() {
    this.notification.blank('Tip', 'Eemo version, no implementation');
  }

  visitor() {
    this.loginService
      .login('Anonymous', 'co@123')
      .finally(() => (this.loading = false))
      .then(() => {
        this.doRedirect();
      });
  }

  forgotPasswordClick() {
    this.forgotPassword.emit();
  }

  sortItem(a, b) {
    return a.order - b.order;
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

  doRedirect(option: { isRedirectByQueryParam?: boolean; isLoginIm?: boolean } = {}) {
    if (option.isRedirectByQueryParam && this.activatedRoute.snapshot.queryParams.redirectUrl) {
      return (location.href = this.activatedRoute.snapshot.queryParams.redirectUrl);
    }

    this.httpService.get(`/platform/Session/GetCurrentUserConfiguration`).subscribe(
      async (data: any) => {
        // 缓存会话数据
        const res: any = data;
        if (res) {
          window.localStorage.setItem('co.session', JSON.stringify(res));
        }

        //设置权限数据
        this.setupAclData(data);

        // 初始化菜单
        // const menus = this.convertMenus(appData.nav.menus.MainMenu.items as any[])
        // this.menuService.add(menus);
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

        // location.href = data.nav.menus.MainMenu.items[0].url;
        if (option.isLoginIm) {
          try {
            // logOut();
          } catch (ex) {
            console.error(ex);
          }

          // await this.getUserSigService.imLogin();
          location.href = '#/dashboard';
        }
      },
      (err) => {
        this.notification.error('Error', err || 'Get User Configuration Failed.');
      },
    );
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

  getQueryString() {
    var uId = location.href.substr(location.href.indexOf('?'));
    var obj = {};
    var arr = uId.slice(1, uId.length).split('&');
    arr.forEach(function (val) {
      var arr1 = val.split('=');
      obj[arr1[0]] = arr1[1];
    });
    return obj;
  }
}
