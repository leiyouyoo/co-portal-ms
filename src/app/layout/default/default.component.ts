import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ReuseTabService } from '@co/cbc';
import { ScrollService, _HttpClient, SettingsService } from '@co/common';
import { updateHostClass } from '@co/core';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { Planet, SwitchModes } from '@co/cms';

import { DefaultLayoutService } from './default.service';
import { ITokenService, DA_SERVICE_TOKEN } from '@co/auth';
import { I18NService } from 'src/app/core/i18n/i18n.service';
// import { logOut } from '@im';
@Component({
  selector: 'layout-default',
  styleUrls: ['./default.component.less'],
  templateUrl: './default.component.html',
  // NOTICE: If all pages using OnPush mode, you can turn it on and all `cdr.detectChanges()` codes
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  private queryCls: string;
  imgUrl = environment.SERVER_URL;
  user: any;
  userInfo: any;
  @ViewChild('settingHost', { read: ViewContainerRef, static: false }) private settingHost: ViewContainerRef;

  isFetching = false;

  get isMobile() {
    return this.pro.isMobile;
  }

  get getLayoutStyle() {
    const { isMobile, fixSiderbar, collapsed, menu, width, widthInCollapsed } = this.pro;
    if (fixSiderbar && menu !== 'top' && !isMobile) {
      return {
        paddingLeft: (collapsed ? widthInCollapsed : width) + 'px',
      };
    }
    return null;
  }

  get getContentStyle() {
    const { fixedHeader, headerHeight } = this.pro;
    return {
      margin: '0',
      'padding-top': '0px',
    };
  }

  private get body(): HTMLElement {
    return this.doc.body;
  }

  constructor(
    appRef: ApplicationRef,
    bm: BreakpointObserver,
    mediaMatcher: MediaMatcher,
    router: Router,
    msg: NzMessageService,
    scroll: ScrollService,
    reuseTabSrv: ReuseTabService,
    private renderer: Renderer2,
    public pro: DefaultLayoutService,
    public httpClient: _HttpClient,
    public i18n: I18NService,
    public settingsService: SettingsService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    @Inject(DOCUMENT) private doc: any, // private cdr: ChangeDetectorRef
    private planet: Planet,
    private reuseTabService: ReuseTabService,
  ) {
    if (window.localStorage.getItem('_token') != null) {
      // 设置微服务选项
      this.planet.setOptions({
        switchMode: SwitchModes.coexist,
        errorHandler: error => {
          console.error(`Failed to load resource, error:`, error);
        }
      });

      // 设置门户应用数据
      this.planet.setPortalAppData({
        data: this.reuseTabService
      });

      // 注册配置中的应用
      // tslint:disable-next-line:quotemark
      this.planet.registerApps(window["CO_PLATFORM"].apps);

      // 启动
      this.planet.start();

      // 订阅子应用加载事件
      this.planet.appsLoadingStart.subscribe(event => {
        const activeAppNames = event.shouldLoadApps.map(item => item.name);
        console.log(`激活子应用: ${activeAppNames.join(',')}`);
      });
    }

    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt) => {
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
      if (!reuseTabSrv.exists(evt.url)) {
        scroll.scrollToTop();
      }
    });

    // media
    const query = {
      'screen-xs': '(max-width: 575px)',
      'screen-sm': '(min-width: 576px) and (max-width: 767px)',
      'screen-md': '(min-width: 768px) and (max-width: 991px)',
      'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
      'screen-xl': '(min-width: 1200px)',
    };
    bm.observe([
      '(min-width: 1200px)',
      '(min-width: 992px) and (max-width: 1199px)',
      '(min-width: 768px) and (max-width: 991px)',
      '(min-width: 576px) and (max-width: 767px)',
      '(max-width: 575px)',
    ]).subscribe(() => {
      this.queryCls = Object.keys(query).find((key) => mediaMatcher.matchMedia(query[key]).matches);
      this.setClass();
    });
  }

  private setClass() {
    const { body, renderer, queryCls, pro } = this;
    updateHostClass(body, renderer, {
      ['color-weak']: pro.layout.colorWeak,
      [`layout-fixed`]: pro.layout.fixed,
      [`aside-collapsed`]: pro.collapsed,
      ['co-portal']: true,
      [queryCls]: true,
      [`co-portal__content-${pro.layout.contentWidth}`]: true,
      [`co-portal__fixed`]: pro.layout.fixedHeader,
      [`co-portal__wide`]: pro.isFixed,
      [`co-portal__dark`]: pro.theme === 'dark',
      [`co-portal__light`]: pro.theme === 'light',
      [`co-portal__menu-side`]: pro.isSideMenu,
      [`co-portal__menu-top`]: pro.isTopMenu,
    });
  }

  ngAfterViewInit(): void {
    // Setting componet for only developer
    // if (!environment.production) {
    //   setTimeout(() => {
    //     const settingFactory = this.resolver.resolveComponentFactory(ProSettingDrawerComponent);
    //     this.settingHost.createComponent(settingFactory);
    //   }, 22);
    // }

  }

  change(lang) {
    this.i18n.use(lang);
    this.settingsService.setLayout('lang', lang);
  }

  ngOnInit() {
    const { pro, unsubscribe$ } = this;
    pro.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => {
      this.setClass();
    });


    this.user = JSON.parse(window.localStorage.getItem('co.session'));
    this.getUserHead();
  }

  ngOnDestroy() {
    const { unsubscribe$, body, pro } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    body.classList.remove(
      `co-portal__content-${pro.layout.contentWidth}`,
      `co-portal__fixed`,
      `co-portal__wide`,
      `co-portal__dark`,
      `co-portal__light`,
    );
  }

  getUserHead() {
    // this.httpClient.get('SSO/User/GetUserDetail', this.user.id).subscribe((res: any) => {
    //   this.userInfo = res ? res : {};
    // });
  }

  logout() {
    this.tokenService.clear();
    try {
      // logOut();
    } catch (e) {
      console.log('im logout error');
    }
    // window.location.href = '/#/passport/login';
  }
}



