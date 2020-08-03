import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { DEFAULT_LAYOUT_COMPONENTS, DEFAULT_LAYOUT_ENTRYCOMPONENTS } from './default';

import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

/**
 * 布局模块
 */
@NgModule({
  imports: [SharedModule, CDKLayoutModule],
  entryComponents: DEFAULT_LAYOUT_ENTRYCOMPONENTS,
  declarations: [...DEFAULT_LAYOUT_COMPONENTS, ...PASSPORT],
  exports: [...DEFAULT_LAYOUT_COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
