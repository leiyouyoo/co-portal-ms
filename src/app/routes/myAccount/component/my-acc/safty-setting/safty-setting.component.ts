import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { _HttpClient } from '@co/common';

declare const FB: any; // Facebook API

@Component({
  selector: 'app-safty-setting',
  templateUrl: './safty-setting.component.html',
  styleUrls: ['./safty-setting.component.less'],
})
export class SaftySettingComponent implements OnInit {
  @ViewChild(EditPasswordComponent, { static: true })
  editPasswordComponent: EditPasswordComponent;

  Externalnames: any = [];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    public translate: TranslateService,
    private modalSrv: NzModalService,
    private http: _HttpClient,
  ) {}

  ngOnInit(): void {
    this.getExternalNames();
    if (this.getQueryString()['bindType'] == 'WechatWeb' && this.getQueryString()['code']) {
      this.BindExternal('WechatWeb', this.getQueryString()['code']);
    } else if (this.getQueryString()['bindType'] == 'WorkWechat' && this.getQueryString()['code']) {
      this.BindExternal('WorkWechat', this.getQueryString()['code']);
    }
  }

  changePass() {
    this.editPasswordComponent.showModal();
  }

  getExternalNames() {
    this.getExternalNamesRequest().subscribe((res: any) => {
      this.Externalnames = res ? res.items : [];
    });
  }

  unbound(type) {
    this.modalSrv.confirm({
      nzTitle: this.translate.instant('Make sure to unbound ?'),
      nzOnOk: () => {
        this.UnbBindExternalUser({ externalProvider: type }).subscribe((res) => {
          this.message.success(this.translate.instant('Unbound success'));
          this.getExternalNames();
        });
      },
    });
  }

  BindExternal(type, code) {
    let parame = {
      externalProvider: type,
      externalAccessCode: code,
    };
    this.BindExternalUser(parame).subscribe((res) => {
      this.message.success(this.translate.instant('Bind success'));
      window.location.href = location.href.slice(0, location.href.indexOf('?'));
      this.getExternalNames();
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

  bindWechatClick() {
    const uri = window.encodeURIComponent(location.href + '?bindType=WechatWeb');
    const appid = 'wx4e58692b24a58d6d';
    const urlAddress =
      'https://open.weixin.qq.com/connect/qrconnect?appid=' +
      appid +
      '&redirect_uri=' +
      uri +
      '&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect';
    window.location.href = urlAddress;
  }

  bindQYWechat() {
    const uri = window.encodeURIComponent(location.href + '?bindType=WorkWechat');
    const appid = 'wwfa5cf6ff34bcf1d2';
    const urlAddress =
      'https://open.work.weixin.qq.com/wwopen/sso/qrConnect?appid=' + appid + '&agentid=1000048' + '&redirect_uri=' + uri + '&state=STATE';
    window.location.href = urlAddress;
  }

  bindFaceBookClick() {
    try {
      FB.login((response) => {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          this.BindExternal('FaceBook', response.authResponse.accessToken);
        } else {
          // The person is not logged into your webpage or we are unable to tell.
        }
      });
    } catch (e) {
      this.message.warning('login faild,Please check your network');
    }
  }

  getExternalNamesRequest() {
    const url = '/SSO/User/GetExternalNames';
    return this.http.get(url);
  }

  UnbBindExternalUser(parame) {
    const url = '/SSO/User/UnbBindExternalUser';
    return this.http.post(url, parame);
  }

  BindExternalUser(parame) {
    const url = '/SSO/User/BindExternalUser';
    return this.http.post(url, parame);
  }
}

export enum externalNames {
  WechatWeb,
  FaceBook,
  WorkWechat,
}
