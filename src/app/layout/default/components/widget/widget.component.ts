import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';

@Component({
  selector: '[default-layout-header-widget]',
  templateUrl: './widget.component.html',
  host: {
    '[class.portal__header-right]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutHeaderWidgetComponent {
  constructor(private router: Router, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) { }
  logout() {
    this.tokenService.clear();
    // this.router.navigateByUrl(this.tokenService.login_url);
  }
}
