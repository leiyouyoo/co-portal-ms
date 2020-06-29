import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@co/common';

@Component({
  selector: 'layout-pro-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProFooterComponent {
  get year() {
    return this.setting.app.year;
  }

  constructor(private setting: SettingsService) { }
}
