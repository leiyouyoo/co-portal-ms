import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ACLService } from '@co/acl';
import { TranslateService } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivateChild {
  constructor(    private modalService: NzModalService,
    private aclService: ACLService,
    private translateService: TranslateService,
  ) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.aclService.can({ role: ['Anonymous'] })) {
      return true;
    }
    switch (true) {
      case state.url.startsWith('/shipments'):
        return true;
      case state.url.startsWith('/sailschedule'):
        return true;
      case state.url.startsWith('/quotes'):
        if (childRoute.queryParams.isForShare) return true;
      // tslint:disable-next-line:no-switch-case-fall-through
      default:
        return new Observable<boolean>((ob) => {
          this.modalService.confirm({
            nzTitle: this.translateService.instant('This operation need to login first'),
            nzIconType: 'info-circle',
            nzOkText: this.translateService.instant('Login'),
            nzOnOk: () => {
              // this.authService.logout();
              ob.next(false);
              ob.complete();
            },
            nzOnCancel: () => {
              ob.next(false);
              ob.complete();
            },
          });
        });
    }
  }
}
