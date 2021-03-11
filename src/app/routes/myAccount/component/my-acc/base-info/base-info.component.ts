import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { UploadFile, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FileManageService } from '../../file-manage/service/file-manage.service';
import { BaseInfoService } from './service/base-info.service';
import { _HttpClient } from '@co/common';
import { CoConfigManager } from '@co/core';
import { EditPasswordComponent } from '../safty-setting/edit-password/edit-password.component';
import { TranslateService } from '@ngx-translate/core';
// import { configInfo } from '../../../../../config';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.less'],
})
export class BaseInfoComponent implements OnInit {
  @ViewChild(EditPasswordComponent, { static: true })
  editPasswordComponent: EditPasswordComponent;
  userInfo: any = {};
  user: any;
  editInfo: boolean = false;
  // imgUrl = configInfo.config.SERVER_URL;

  imgUrl = CoConfigManager.getValue('serverUrl');
  imageFile: any;
  showCropper: boolean = false;
  Externalnames: any = [];

  constructor(
    private message: NzMessageService,
    private fileManageService: FileManageService,
    private baseInfoService: BaseInfoService,
    private http: _HttpClient,
    public translate: TranslateService,
    private modalSrv: NzModalService,
  ) {
    this.user = JSON.parse(window.localStorage.getItem('co.session'));
  }

  ngOnInit(): void {
    this.getUserDetail();

    this.getExternalNames();
    if (this.getQueryString()['bindType'] == 'WechatWeb' && this.getQueryString()['code']) {
      this.BindExternal('WechatWeb', this.getQueryString()['code']);
    } else if (this.getQueryString()['bindType'] == 'WorkWechat' && this.getQueryString()['code']) {
      this.BindExternal('WorkWechat', this.getQueryString()['code']);
    }
  }

  getUserDetail() {
    this.getPosotionUserDetail(this.user?.session?.user?.id).subscribe((res: any) => {
      this.userInfo = res ? res : {};
    });
  }

  edit() {
    this.editInfo = true;
  }

  /**
   * @description 头像上传
   * @author youlei
   * @memberof ImTemplateComponent
   */
  editHead() {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      this.imageFile = file;
      this.showCropper = true;
    };
  }

  // 处理头像
  onEmitFile(file) {
    this.fileManageService.upload(file).subscribe(async (res: any) => {
      let parame = {
        userId: this.user?.session?.user?.id,
        profilePictureId: res.fileId,
      };
      const success = await this.editUserHead(parame).then((res) => {
        return true;
      });
      if (!success) {
        return;
      }
      this.message.success('success');
      this.baseInfoService.senChangeSubject();
      this.getUserDetail();
    });
  }

  getPosotionUserDetail(userid: number) {
    const url = 'SSO/User/GetUserDetail';
    return this.http.get(url, { userid });
  }

  editUserHead(parame) {
    const url = '/SSO/User/UpdateUserInfo';
    return this.http.put(url, parame).toPromise();
  }

  editPass() {
    this.editPasswordComponent.showModal();
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

  getExternalNames() {
    this.getExternalNamesRequest().subscribe((res: any) => {
      this.Externalnames = res ? res.items : [];
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
