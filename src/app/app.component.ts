import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService } from '@co/common';
// import { VERSION as VERSION_CO } from '@co/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { filter } from 'rxjs/operators';
import { AppRootContext } from '../../apps/common';
import { Planet, SwitchModes, GlobalEventDispatcher, ApplicationStatus, PlanetApplication } from '../../packages/planet/src/public-api';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  activeAppNames: string[] = [];

  get loadingDone() {
    return this.planet.loadingDone;
  }

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private planet: Planet,
    private globalEventDispatcher: GlobalEventDispatcher,
    public appRootContext: AppRootContext,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
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
