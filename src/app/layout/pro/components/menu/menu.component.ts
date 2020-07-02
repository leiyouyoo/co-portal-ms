import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'co-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class LayoutProMenuComponent implements OnInit {
  cachedMenu: Menu[];
  menu: any;
  isSelect = false;
  drawerVisible = false;
  constructor(public router: Router) {}
  ngOnInit() {
    this.menu = this.getMenu();
    debugger;
  }

  getMenu() {
    try {
      if (this.cachedMenu) {
        this.cachedMenu.sort((a, b) => a.order - b.order);
        urlFactory(this.cachedMenu);
        return this.cachedMenu;
      }
      const menu = ((JSON.parse(window.localStorage.getItem('ICPUserMsg')) as any).nav.menus.MainMenu.items || []) as Menu[];
      if (menu && menu.length) {
        menu.sort((a, b) => a.order - b.order);
        urlFactory(menu);
        this.cachedMenu = menu;
        return this.cachedMenu;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  getChildRouteIsActive(item): boolean {
    const urlMatcher = `${location.hash}`.replace('#', '');
    return item.some((e) => {
      return e._url === urlMatcher;
    });
  }
}
interface Menu {
  name: string;
  displayName: string;
  pic: string;
  picHover: string;
  url: string;
  _url: string;
  _isExternalUrl: boolean;
  order: number;
  params?: any;
  icon: string;
  items: Menu[];
}
