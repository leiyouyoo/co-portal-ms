import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PlatformSettingService } from '@co/cds';

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

  /**
   * 构造函数
   * @param settingSrv
   */
  constructor(private settingSrv: PlatformSettingService) {}

  /**
   * 切换语言
   * @param lang
   */
  onChangeLang(lang) {
    if (lang == this.currentLang) return;

    this.settingSrv.setCurrentUserSetting({ name: 'Platform.LanguageSettingNames.CurrentLanguage', value: lang }).subscribe(() => {
      window.localStorage.setItem('language', lang);
      window.location.reload();
    });
  }
}
