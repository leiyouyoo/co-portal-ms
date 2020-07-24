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
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit() {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle();
      this.modalSrv.closeAll();
    });
  }
}
