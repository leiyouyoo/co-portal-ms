import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { PlatformSettingService } from '@co/cds';
import { I18NService } from 'src/app/core/i18n/i18n.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'langs',
  templateUrl: './langs.component.html',
  styles: [
    `
      .lang-option {
        width: 148px;
        height: 32px;
        margin-bottom: 12px;

        font-size: 14px;
        font-weight: 500;

        color: rgba(255, 255, 255, 1);
        border-radius: 4px;

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .lang-option:hover {
        background: rgba(207, 207, 207, 0.2);
      }
      .lang-option:last-child {
        margin-bottom: 0;
      }
      .lang-option.active {
        background: rgba(207, 207, 207, 0.5);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangsComponent {
  get langs() {
    return this.i18n.getLangs();
  }

  get curLangCode() {
    return this.i18n.currentLang;
  }

  constructor(
    private translate: TranslateService,
    private modalRef: NzModalRef,
    private settingSrv: PlatformSettingService,
    public i18n: I18NService,
  ) {}

  change(lang) {
    window.localStorage.setItem('language', lang);
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
    this.modalRef.close();
  }
}
