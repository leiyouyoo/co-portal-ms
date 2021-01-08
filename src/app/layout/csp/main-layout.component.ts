import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ACLService } from '@co/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
import { PlatformSettingService } from '@co/cds';
import { Planet, ReuseTabService, SwitchModes } from '@co/cms';
import { _HttpClient, ScrollService, SettingsService } from '@co/common';
import { CO_SESSIONSERVICE_TOKEN, CoConfigManager, ISessionService } from '@co/core';
import { I18NService } from '@core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare const window: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less'],
})
export class MainLayoutComponent {

  private unsubscribe$ = new Subject<void>();
  private queryCls: string;
  imgUrl = CoConfigManager.getValue('serverUrl');
  isFetching = false;

  constructor(
    bm: BreakpointObserver,
    mediaMatcher: MediaMatcher,
    router: Router,
    msg: NzMessageService,
    scroll: ScrollService,
    private settingSrv: PlatformSettingService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    public httpClient: _HttpClient,
    public i18n: I18NService,
    public aclService: ACLService,
    public settingsService: SettingsService,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    @Inject(DOCUMENT) private doc: any,
    private planet: Planet,
    private reuseTabService: ReuseTabService,
  ) {
    if (sessionService.user != null) {
      // 设置微服务选项
      this.planet.setOptions({
        switchMode: SwitchModes.coexist,
        errorHandler: (error) => {
          console.error(`Failed to load resource, error:`, error);
        },
      });

      // 设置门户应用数据
      this.planet.setPortalAppData({
        data: this.reuseTabService,
        reuseTabService: this.reuseTabService,
        aclService: this.aclService,
      });

      // 注册配置中的应用
      // tslint:disable-next-line:quotemark
      const apps: any[] = CoConfigManager.getSection('apps');
      this.planet.registerApps(apps);

      // 启动
      this.planet.start();

      //多路由服务挂载在全局planet上
      window.planet.mainTabService = reuseTabService;

      // 订阅子应用加载事件
      this.planet.appsLoadingStart.subscribe((event) => {
        const activeAppNames = event.shouldLoadApps.map((item) => item.name);
        console.log(`激活子应用: ${activeAppNames.join(',')}`);
      });
    }

    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt: any) => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        scroll.scrollToTop();
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
      // If have already cached router, should be don't need scroll to top
      if (!reuseTabService.exists(evt.url)) {
        scroll.scrollToTop();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
