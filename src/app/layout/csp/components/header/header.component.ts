import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@co/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
import { Planet, ReuseTabService } from '@co/cms';
import { CO_SESSIONSERVICE_TOKEN, CoConfigManager, ISessionService, CoPageBase } from '@co/core';
import { logOut } from '@co/im';
import { HeaderInputSearchService } from './header-input-search.service';

declare const FB: any; // Facebook API
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent extends CoPageBase {
  @ViewChild('headerInput', { static: true }) headerInput;
  showSearch = false;
  position: any = 'null';
  userInfo: any = {};
  serverUrl = CoConfigManager.getValue('serverUrl');
  showSystem = false;

  get user() {
    return this.sessionService.user;
  }

  constructor(
    private router: Router,
    private headerInputSearchService: HeaderInputSearchService,
    private httpClient: HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    public aclService: ACLService,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
    private planet: Planet,
    private reuseTabService: ReuseTabService,
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getUserHead();
    // this.baseInfoService.getChangeSubject().subscribe((res) => {
    //   this.getUserHead();
    // });
  }

  onHeaderInputClick(e: MouseEvent) {
    this.headerInputSearchService.open();
  }

  logout() {
    localStorage.removeItem('co.session');
    this.tokenService.clear();
    this.reuseTabService.clear(true);
    this.planet.clear();
    try {
      FB.logout(function (response) {
        // Person is now logged out
      });
    } catch (e) {
      console.log('can not connect to faceBook');
    }
    try {
      logOut();
    } catch (e) {
      console.log('im logout error');
    }
    window.location.href = `/#/passport/login`;
  }

  getUserHead() {
    this.getPosotionUserDetail(this.user.id).subscribe((res: any) => {
      this.userInfo = res ? res : {};
      this.position = res && res.position ? res.position : '';
    });
  }

  getPosotionUserDetail(userid: any) {
    const url = this.serverUrl + '/SSO/User/GetUserDetail';
    return this.httpClient.get(url, { params: { userid } });
  }

  linkBaseInfo() {
    this.$navigate(['csp/account/baseInfo'], { queryParams: {} });
  }
}
