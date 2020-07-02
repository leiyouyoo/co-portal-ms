import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'layout-pro-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProLogoComponent {
  @Input() showType: boolean;
  constructor() {}
}
