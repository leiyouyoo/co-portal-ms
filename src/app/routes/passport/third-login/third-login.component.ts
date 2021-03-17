import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoAuthService, _HttpClient } from '@co/common';
import { CoConfigManager, CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';
import { IS_CSP } from '@shared';
import { StartupService } from 'src/app/core/startup/startup.service';
import { logOut } from '@co/im';

@Component({
  selector: 'portal-app-third-login',
  templateUrl: './third-login.component.html',
  styleUrls: ['./third-login.component.less'],
})
export class ThirdLoginComponent implements OnInit {
  notification: any;

  constructor(
    public loginService: CoAuthService,
    private activatedRoute: ActivatedRoute,
    public httpService: _HttpClient,
    private router: Router,
    private startupService: StartupService,
    @Inject(IS_CSP) private isCSP: boolean,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
  ) { }

  ngOnInit(): void {

    console.log(this.getQueryString()['code'], "code");
    // 微信登录
    if (this.getQueryString()['loginType'] == 'wechat' && this.getQueryString()['code']) {
      console.log(1)
      this.thirdLogin('WechatWeb', this.getQueryString()['code']);
    } else if (this.getQueryString()['loginType'] == 'workwechat' && this.getQueryString()['code']) {
      console.log(2)
      this.thirdLogin('WorkWechat', this.getQueryString()['code']);
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
        console.log(res, "res");
        if (res.access_token) {
          this.doRedirect({ isRedirectByQueryParam: true, isLoginIm: true });
        }
      })
      .catch((e: any) => {
        console.log(e, "error")
        this.router.navigate(['/passport/login'], {
          queryParams: {
            errorText: e?.error_description || e?.error?.error_description,
          },
        });
      });
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

  wechatLogin(code) {
    let parame = {
      externalProvider: 'WechatWeb',
      externalAccessCode: code,
    };
    this.loginService.thirdLogin(parame).then((res: any) => {
      if (res.access_token) {
        this.doRedirect({ isRedirectByQueryParam: true, isLoginIm: true });
      }
    });
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


  sortItem(a, b) {
    return a.order - b.order;
  }

  bindWeChat(code) {
    let param = {
      externalProvider: 'WechatWeb',
      externalAccessCode: code,
    };
    this.loginService.bindExternalUser(param).subscribe((res) => {
      window.history.go(-1);
    });
  }
}
