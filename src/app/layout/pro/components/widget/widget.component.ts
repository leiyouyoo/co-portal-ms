import { Component, Inject, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
import { StartupService } from 'src/app/core/startup/startup.service';
import { CoI18NService, CO_I18N_TOKEN } from '@co/common';
import { environment } from '@env/environment';
import { _HttpClient } from '@co/common';
@Component({
  selector: 'app-header',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class LayoutProHeaderWidgetComponent implements OnInit {
  @ViewChild('headerInput', { static: true }) headerInput;
  showSearch = false;
  position: any = 'null';
  userInfo: any = {};
  imgUrl = environment.SERVER_URL;
  abp: any = JSON.parse(window.localStorage.getItem('ICPUserMsg'));

  constructor(
    private http: _HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    @Inject(CO_I18N_TOKEN) private i18n: CoI18NService,
  ) {}

  ngOnInit() {
    debugger;
    this.getUserHead();
  }

  avatarUrl(): string {
    const id = this.abp.session.user.profilePictureId;
    return id ? `${environment.downloadUrl}?fileId=${id}&handler=image` : null;
  }

  logout(redirect = false) {
    this.tokenService.clear();
    const urlSearchParams = new URLSearchParams();
    if (redirect) {
      urlSearchParams.append('redirectUrl', `${location.pathname}${location.hash}`);
    }
    let queryParamsString = urlSearchParams.toString();
    queryParamsString = queryParamsString ? '?' + queryParamsString : '';
    window.location.href = `/#/passport/login${queryParamsString}`;
  }

  getUserHead() {
    this.getPosotionUserDetail(this.abp.session.user.id).subscribe((res: any) => {
      console.log(res, '0000000000000');
      this.userInfo = res ? res : {};
      this.position = res && res.position ? res.position : '';
    });
  }

  getPosotionUserDetail(userid: number) {
    const url = 'SSO/User/GetUserDetail';
    return this.http.get(url, { userid });
  }
}
