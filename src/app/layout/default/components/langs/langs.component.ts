import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PlatformSettingService } from '@co/cds';
import { I18NService } from 'src/app/core/i18n/i18n.service';
import { SettingsService } from '@co/common';

/**
 * 语言切换组件
 */
@Component({
  selector: 'default-layout-langs',
  styleUrls: ['./langs.component.less'],
  templateUrl: 'langs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutLangsComponent {
  /**
   * 当前语言
   */
  get currentLang(): string {
    return window.localStorage.getItem('language') || navigator.language;
  }

  get langs() {
    return this.i18n.getLangs();
  }

  /**
   * 构造函数
   * @param settingSrv
   */
  constructor(public i18n: I18NService, private settingSrv: PlatformSettingService, private setting: SettingsService) {}

  /**
   * 切换语言
   * @param lang
   */
  onChangeLang(lang) {
    if (lang == this.currentLang) return;
    this.i18n.use(lang);
    this.setting.setLayout('lang', lang);
    this.settingSrv.setCurrentUserSetting({ name: 'Platform.LanguageSettingNames.CurrentLanguage', value: lang }).subscribe(() => {
      window.localStorage.setItem('language', lang);
      window.location.reload();
    });
  }
}
