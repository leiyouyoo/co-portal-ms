import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { filter } from 'rxjs/operators';

import { TitleService } from '@co/common';
import { Planet, SwitchModes } from '@co/cms';
import { ReuseTabService } from '@co/cbc';

// import { GetUserSigService } from '@im';

/**
 * 应用入口组件
 */
@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  activeAppNames: string[] = [];

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private planet: Planet,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
    private reuseTabService: ReuseTabService,
    // private getUserSigService: GetUserSigService,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit() {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle();
      this.modalSrv.closeAll();
    });

    // 登陆Im
    // try {
    //   this.getUserSigService.imLogin();
    // } catch (e) {
    //   console.error(e);
    // }

    // // 设置微服务选项
    // this.planet.setOptions({
    //   switchMode: SwitchModes.coexist,
    //   errorHandler: error => {
    //     console.error(`Failed to load resource, error:`, error);
    //   }
    // });

    // // 设置门户应用数据
    // this.planet.setPortalAppData({
    //   data: this.reuseTabService
    // });

    // // 注册配置中的应用
    // // tslint:disable-next-line:quotemark
    // this.planet.registerApps(window["CO_PLATFORM"].apps);

    // // 启动
    // this.planet.start();

    // // 订阅子应用加载事件
    // this.planet.appsLoadingStart.subscribe(event => {
    //   const activeAppNames = event.shouldLoadApps.map(item => item.name);
    //   console.log(`激活子应用: ${activeAppNames.join(',')}`);
    // });
  }
}
