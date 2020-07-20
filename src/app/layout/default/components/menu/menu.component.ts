import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, MenuService } from '@co/common';
import { InputBoolean } from '@co/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CoSubmenuComponent } from './submenu.directive';

import { DefaultLayoutService } from '../../default.service';

const urlFactory = (items: Menu[]) => {
  const urlMatcher = new RegExp(`^${location.pathname}#`);
  items.forEach((o) => {
    o._url = (o.url || '').replace(urlMatcher, '');
    o._isExternalUrl = !urlMatcher.test(o.url);
    if (o.items && o.items.length) {
      urlFactory(o.items);
    }
  });
};

@Component({
  selector: '[default-layout-menu]',
  styleUrls: ['./menu.component.less'],
  templateUrl: './menu.component.html',
  host: {
    '[class.co-portal__menu]': 'true',
    '[class.co-portal__menu-only-icon]': 'pro.onlyIcon',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  menus: Menu[];

  @Input() @InputBoolean() disabledAcl = false;
  @Input() mode = 'inline';
  @ViewChild('submenu', { static: false }) submenu!: CoSubmenuComponent;

  constructor(private menuSrv: MenuService, private router: Router, public pro: DefaultLayoutService, private cdr: ChangeDetectorRef) { }

  private cd() {
    this.cdr.markForCheck();
  }

  private genMenus(data: Menu[]) {
    this.menus = this.getMenu();

    // this.openStatus();
  }

  private getMenu() {
    try {
      const menu = ((JSON.parse(window.localStorage.getItem('co.session')) as any).nav.menus.MainMenu.items || []) as Menu[];
      if (menu && menu.length) {
        menu.sort((a, b) => a.order - b.order);
        urlFactory(menu);
        return menu;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  private openStatus() {
    const inFn = (list: Menu[]) => {
      for (const i of list) {
        i._open = false;
        i._selected = false;
        if (i.children.length > 0) {
          inFn(i.children);
        }
      }
    };
    inFn(this.menus);

    let item = this.menuSrv.getHit(this.menus, this.router.url, true);
    if (!item) {
      this.cd();
      return;
    }
    do {
      item._selected = true;
      if (!this.pro.isTopMenu && !this.pro.collapsed) {
        item._open = true;
      }
      item = item._parent;
    } while (item);
    this.cd();
  }

  openChange(item: Menu, statue: boolean) {
    const sb = this.submenu;
    const data = item._parent ? item._parent.children : this.menus;
    if (data && data.length <= 1) {
      return;
    }
    data.forEach((i) => (i._open = false));
    item._open = statue;
  }

  closeCollapsed() {
    const { pro } = this;
    if (pro.isMobile) {
      setTimeout(() => pro.setCollapsed(true), 25);
    }
  }

  ngOnInit() {
    const { unsubscribe$, router, pro } = this;
    this.menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((res) => this.genMenus(res));

    router.events
      .pipe(
        takeUntil(unsubscribe$),
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe(() => this.openStatus());

    pro.notify
      .pipe(
        takeUntil(unsubscribe$),
        filter(() => !!this.menus),
      )
      .subscribe(() => this.cd());
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
