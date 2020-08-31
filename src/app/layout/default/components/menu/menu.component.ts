import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Menu, MenuService } from '@co/common';
import { log } from '@co/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
  unsubscribe$ = new Subject<void>();
  activedCategory: string;
  hideMainMenu: boolean = false;

  allMenus: Menu[];
  currentMenu: Menu;
  childMenus: Menu[] = [];
  constructor(
    public elementRef: ElementRef,
    private menuSrv: MenuService,
    private router: Router,
    public pro: DefaultLayoutService,
    private cdr: ChangeDetectorRef,
    protected renderer: Renderer2,
  ) {}

  ngOnInit() {
    const { unsubscribe$ } = this;
    this.menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((res) => {
      this.genMenus(res);
    });

    this.currentMenu = this.getMenu(window.location.hash.replace('#', ''));
    this.router.events.pipe(filter((evt: any) => evt instanceof NavigationEnd)).subscribe((evt: any) => {
      this.currentMenu = this.getMenu(this.router.url);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }

  public get activedMenuKey() {
    return this.currentMenu?.key;
  }

  public get favoritesMenus() {
    const favorites = this.allMenus.find((m) => m.key === 'favorites');
    return favorites?.children;
  }

  public get defaultMenus() {
    const favorites = this.allMenus.find((m) => m.key === 'menus');
    return favorites?.children;
  }

  onCatecoryActived(category: string) {
    log(`Active Category:${category}`);

    this.activedCategory = category;
    this.genChildMenus(category);
  }

  private genMenus(data: Menu[]) {
    this.allMenus = data;

    if (this.defaultMenus && this.defaultMenus.length > 0) {
      this.genChildMenus(this.defaultMenus[0].key);
    }

    this.cdr.markForCheck();
  }

  private genChildMenus(category: any) {
    const menuCategory = this.defaultMenus.find((m) => m.key === category);
    this.childMenus = menuCategory?.children;
    this.cdr.markForCheck();
  }

  private getMenu(url: string, recursive = true): Menu | null {
    let item: Menu | null = null;

    const menus = this.menuSrv.menus;

    while (!item && url) {
      this.menuSrv.visit(menus, (i) => {
        if (i.link != null && i.link.startsWith(url)) {
          item = i;
        }
      });

      if (!recursive) break;

      if (/[?;]/g.test(url)) {
        url = url.split(/[?;]/g)[0];
      } else {
        url = url.split('/').slice(0, -1).join('/');
      }
    }

    return item;
  }
}
