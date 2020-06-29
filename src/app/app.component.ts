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
    // renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_CO.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);



  }

  ngOnInit() {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle();
      this.modalSrv.closeAll();
    });

    // this.planet.setOptions({
    //   switchMode: SwitchModes.coexist,
    //   errorHandler: error => {
    //     console.log(`错误`, '加载资源失败' + JSON.stringify(error));
    //   }
    // });

    // this.appRootContext.setName(`my name is app root context`);

    // this.planet.setPortalAppData({
    //   appRootContext: this.appRootContext
    // });

    // const appHostClass = 'thy-layout';
    // this.planet.registerApps([
    //   {
    //     name: 'app3',
    //     hostParent: '#app-host-container',
    //     hostClass: appHostClass,
    //     routerPathPrefix: '/app3',
    //     selector: 'app3-root',
    //     resourcePathPrefix: '/static/app3/',
    //     preload: true,
    //     switchMode: SwitchModes.coexist,
    //     loadSerial: false,
    //     // prettier-ignore
    //     scripts: [
    //       'main.js'
    //       // 'polyfills.js'
    //     ],
    //     // styles: ['assets/main.css'],
    //     manifest: 'static/app3/manifest.json',
    //     extra: {
    //       name: '应用3',
    //       color: '#ffa415'
    //     }
    //   },
    // ]);

    // this.planet.start();

    // this.globalEventDispatcher.register('openADetail').subscribe(event => {
    //   // this.thyDialog.open(ADetailComponent);
    // });

    // this.planet.appsLoadingStart.subscribe(event => {
    //   this.activeAppNames = event.shouldLoadApps.map(item => item.name);
    //   console.log(`active app names: ${this.activeAppNames.join(',')}`);
    // });
  }

}
