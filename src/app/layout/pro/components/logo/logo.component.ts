import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@co/common';

@Component({
  selector: 'layout-pro-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProLogoComponent {
  get name() {
    return this.setting.app.name;
  }

  constructor(private setting: SettingsService) { }
}
