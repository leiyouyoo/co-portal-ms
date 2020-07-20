import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@co/common';

@Component({
  selector: 'default-layout-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutFooterComponent {
  get year() {
    return this.setting.app.year;
  }

  constructor(private setting: SettingsService) { }
}
