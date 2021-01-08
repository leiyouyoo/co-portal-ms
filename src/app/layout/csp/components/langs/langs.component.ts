import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PlatformSettingService } from '@co/cds';
import { SettingsService } from '@co/common';
import { InputBoolean } from 'ng-zorro-antd';
import { I18NService } from 'src/app/core/i18n/i18n.service';

@Component({
  selector: 'csp-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CSPLangsComponent {
  /** Placement of pop menu */
  @Input() placement = 'bottomRight';

  /** Whether to display language text */
  @Input() @InputBoolean() showLangText = false;
  @Output() updateMenu = new EventEmitter<any>();

  /**
   * 构造函数
   * @param settingSrv
   */
  constructor(public i18n: I18NService, private settingSrv: PlatformSettingService, private setting: SettingsService) {}

  /**
   * 当前语言
   */
  get currentLang(): string {
    return window.localStorage.getItem('language') || navigator.language;
  }

  get langs() {
    return this.i18n.getLangs();
  }

  change(lang) {
    if (lang == this.currentLang) return;
    this.i18n.use(lang);
    this.setting.setLayout('lang', lang);
    this.settingSrv.setCurrentUserSetting({ name: 'Platform.LanguageSettingNames.CurrentLanguage', value: lang }).subscribe(() => {
      window.localStorage.setItem('language', lang);
      window.location.reload();
    });
  }
}
