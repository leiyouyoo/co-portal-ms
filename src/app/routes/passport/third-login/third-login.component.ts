import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService, HttpService } from '@cityocean/common-library';
import { ActivatedRoute, Router } from '@angular/router';
import { SsoService } from 'projects/cityocean/sso-library/src/lib/sso.service';
@Component({
  selector: 'portal-app-third-login',
  templateUrl: './third-login.component.html',
  styleUrls: ['./third-login.component.less']
})
export class ThirdLoginComponent implements OnInit {
  notification: any;

  constructor(
    private location:Location,
    public loginService: AuthService,
    private activatedRoute: ActivatedRoute,
    public httpService: HttpService,
    private ssoService: SsoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.getQueryString()['code'])

    // 微信登录
    if(this.getQueryString()['loginType']=="wechat" && this.getQueryString()['code']){
      this.thirdLogin("WechatWeb",this.getQueryString()['code']);
    }else if (this.getQueryString()['loginType']=="workwechat" && this.getQueryString()['code']){
      this.thirdLogin("WorkWechat",this.getQueryString()['code']);
    }
  }

  thirdLogin(type,code){
    let parame={
      externalProvider: type,
      externalAccessCode: code
    }

    this.loginService.thirdLogin(parame).then((res:any)=>{
      if (res.access_token) {
        this.doRedirect({ isRedirectByQueryParam: true });
      }
    })
    .catch((e: any) => {
      this.router.navigate(['/login'], {
        queryParams: {
          errorText:e.error.error_description
        }
      });
    });

  }


  getQueryString() {
    var uId = location.href.substr(location.href.indexOf('?'));  
    var obj = {};
    var arr =uId.slice(1,uId.length).split('&');
    arr.forEach(function(val){
      var arr1 = val.split('=');
      obj[arr1[0]]=arr1[1];
    })
    return obj
  }


  wechatLogin(code){
    let parame={
      externalProvider: "WechatWeb",
      externalAccessCode: code
    }
    this.loginService.thirdLogin(parame).then((res:any)=>{
      if (res.access_token) {
        this.doRedirect({ isRedirectByQueryParam: true });
      }
    })
    
  }

  doRedirect(option: { isRedirectByQueryParam?: boolean } = {}) {
    if (option.isRedirectByQueryParam && this.activatedRoute.snapshot.queryParams.redirectUrl) {
      return location.href = this.activatedRoute.snapshot.queryParams.redirectUrl;
    }

    this.httpService.get(`/platform/Session/GetCurrentUserConfiguration`)
      .subscribe((data: any) => {
        try {
          data.nav.menus.MainMenu.items.sort(this.sortItem);
        } catch (e) {
          console.error('菜单排序报错');
        }
        location.href = data.nav.menus.MainMenu.items[0].url;
      }, err => {
        this.notification.error('Error', err || 'Get User Configuration Failed.');
      });
  }

  sortItem(a, b) {
    return a.order - b.order;
  }

  bindWeChat(code){
    let parame={
      "externalProvider": "WechatWeb",
      "externalAccessCode":  code
    }
    this.ssoService.BindExternalUser(parame).subscribe(res=>{
      window.history.go(-1);
    })
  }


}
