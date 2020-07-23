import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'default-layout-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.portal__sider-logo]': 'true' },
})
export class DefaultLayoutLogoComponent {
  constructor() { }
}
