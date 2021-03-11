import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient, CoAuthService } from '@co/common';
import { CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';
import { StartupService } from '@core';

import { NzNotificationService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { logOut } from '@co/im';
import { LangsComponent } from 'src/app/layout/default/components/lang/langs.component';
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
  errorText: any = null;  // 第三方登录错误返回信息
  code: any = null;   // 第三方登录code
  loginType: any = null;  // 第三方登录类型
  constructor(
    private fb: FormBuilder,
    public loginService: CoAuthService,
    private nzModalService: NzModalService,
    public httpService: _HttpClient,
    private notification: NzNotificationService,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private startupService: StartupService,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
  ) {

  }

  ngOnInit(): void {

    this.errorText = this.activatedRoute.snapshot.queryParams?.errorText;
    this.code = this.activatedRoute.snapshot.queryParams?.code;
    this.loginType = this.activatedRoute.snapshot.queryParams?.loginType;

    this.validateForm = this.fb.group({
      // tenantId: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
    this.savedUser = this.loginService.getSavedUser() || {};

    console.log(this.loginType, "loginType")
    console.log(this.code, "code")
    console.log(this.loginType, "loginType")
    // 微信登录
    if (this.loginType = 'wechat' && this.code) {
      this.thirdLogin('WechatWeb', this.code);
    } else if (this.loginType = 'workwechat' && this.code) {
      this.thirdLogin('WorkWechat', this.getQueryString()['code']);
    } else if (this.errorText) {
      console.log(this.errorText, "errorText")
      let msg = this.errorText.replace(/["]/g, ' ');
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
        this.message.error(e?.error?.error_description || e?.error_description);
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
      .then((res: any) => {
        if (res.access_token) {
          this.doRedirect({ isRedirectByQueryParam: true, isLoginIm: true });
        } else {
          this.message.error('登录失败');
        }
      })
      .catch((e: any) => {
        this.loading = false;
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

  doRedirect(option: { isRedirectByQueryParam?: boolean; isLoginIm?: boolean } = {}) {
    if (option.isRedirectByQueryParam && this.activatedRoute.snapshot.queryParams.redirectUrl) {
      return (location.href = this.activatedRoute.snapshot.queryParams.redirectUrl);
    }

    this.startupService.load().then(
      (data: any) => {
        if (option.isLoginIm) {
          try {
            logOut();
          } catch (ex) {
            console.error(ex);
          }
        }
        const appData = this.sessionService.data;
        if (appData?.session.user.isExternal) {
          location.href = '#/csp/dashboard';
        } else {
          location.href = '#/dashboard';
        }
      },
      (err) => {
        this.notification.error('Error', err || 'Get User Configuration Failed.');
      },
    );
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

  onLangClick() {
    this.nzModalService.create({
      nzContent: LangsComponent,
      nzFooter: null,
      nzClosable: false,
      nzWrapClassName: 'd-flex align-items-center justify-content-center',
      /* nzBodyStyle: {
         width: '200px',
         height: '166px',
       },*/
      nzStyle: {
        width: '200px',
        height: '166px',
        top: '0',
      },
      nzClassName: 'modal-content-transparent',
      nzMaskStyle: {
        background: 'transparent',
      },
      nzNoAnimation: true,
    });
  }

  faceBookLogin() {
    this.loginService.faceBookLogin();
  }

  wechatLoginClick() {
    this.loginService.wechatLogin();
  }

  WorkWechatLoginClick() {
    this.loginService.workWechatLogin();
  }
}
