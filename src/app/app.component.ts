import { Component, ElementRef, OnInit, Renderer2, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { filter } from 'rxjs/operators';
import { CoConfigManager } from '@co/core';

import { TitleService } from '@co/common';
import { Planet, ReuseTabService } from '@co/cms';
import { ITokenService, DA_SERVICE_TOKEN } from '@co/auth';

import { setupVersion } from './app.version';
import { GetUserSigService } from '../app/shared/im';

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
    private getUserSigService: GetUserSigService,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit() {
    this.router.events.pipe(filter((evt: any) => evt instanceof NavigationEnd)).subscribe((evt: any) => {
      this.titleSrv.setTitle('City Ocean');
      this.modalSrv.closeAll();
    });

    try {
      const im = CoConfigManager.getValue('im');
      im.ImEnable && this.getUserSigService.imLogin();
    } catch (e) {
      console.error(e);
    }

    setupVersion(this.planet);
  }
}
