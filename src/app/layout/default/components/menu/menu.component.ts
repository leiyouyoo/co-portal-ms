import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuService } from '@co/common';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CoSubmenuComponent } from './submenu.directive';
import { DefaultLayoutService } from '../../default.service';

@Component({
  selector: '[default-layout-menu]',
  templateUrl: './menu.component.html',
  host: {
    '[class.portal-menu]': 'true',
    '[class.portal-menu__only-icon]': 'pro.onlyIcon',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  menus: Menu[];

  // @ViewChild('submenu', { static: false }) submenu!: CoSubmenuComponent;

  constructor(public elementRef: ElementRef, private menuSrv: MenuService, private router: Router, public pro: DefaultLayoutService, private cdr: ChangeDetectorRef, protected renderer: Renderer2) { }

  private genMenus(data: Menu[]) {
    this.menus = this.menuSrv.menus;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    const { unsubscribe$ } = this;
    this.menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((res) => this.genMenus(res));
  }


  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
