import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { CO_SESSIONSERVICE_TOKEN, CoPageBase, ISessionService } from '@co/core';
import { cloneDeep, isMatch } from 'lodash';

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
export class MenuComponent extends CoPageBase {
  cachedMenu: Menu[];

  get menu(): Menu[] {
    try {
      const appData = this.sessionService.data;
      if (!appData) return [];
      const menu = (appData.nav.menus.MainMenu.items || []) as Menu[];
      if (!menu?.length) return [];
      const matched = isMatch(this.cachedMenu?.[0], menu[0]);
      if (this.cachedMenu && matched) {
        return this.cachedMenu;
      } else {
        menu.sort((a, b) => a.order - b.order);
        urlFactory(menu);
        this.cachedMenu = cloneDeep(menu);
        return this.cachedMenu;
      }

    } catch (e) {
      console.error(e);
      return [];
    }
  }

  isSelect = false;
  drawerVisible = false;

  constructor(injector: Injector, public router: Router,
              @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService) {
    super(injector);
  }

  ngOnInit() {
  }

  getChildRouteIsActive(item): boolean {
    const urlMatcher = `${location.hash}`.replace('#', '');
    return item.some((e) => urlMatcher.includes(e._url));
  }

  getRouteIsActive(item): boolean {
    const urlMatcher = `${location.hash}`.replace('#', '');
    return urlMatcher.includes(item._url);
  }

  navigate(url) {
    this.$navigate([url]);
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
