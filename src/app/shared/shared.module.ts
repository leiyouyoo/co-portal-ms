import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoACLModule } from '@co/acl';
import { CoCommonModule } from '@co/common';
import { CoFormModule } from '@co/form';
import { CoLayoutComponentsModule } from '@co/cbc';

import { SHARED_CO_MODULES } from './shared-co.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs
import { CountdownModule } from 'ngx-countdown';
import { DragulaModule } from 'ng2-dragula';

const THIRDMODULES = [CountdownModule, DragDropModule];
// #endregion

// #region your componets & directives
import { DEFAULT_SHARED_COMPONENTS } from '../layout/default';
import { QUICK_CHAT_COMPONENTS } from './components/quick-chat';
import { environment } from '@env/environment';

const COMPONENTS_ENTRY = [
  ...QUICK_CHAT_COMPONENTS,
];
const COMPONENTS = [...COMPONENTS_ENTRY, ...DEFAULT_SHARED_COMPONENTS];
const DIRECTIVES = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    RouterModule,
    ReactiveFormsModule,
    CoACLModule.forRoot(),
    CoFormModule.forRoot(),
    CoCommonModule.forRoot({ environment }),
    CoLayoutComponentsModule,
    DragulaModule.forRoot(),
    ...SHARED_CO_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: COMPONENTS_ENTRY,
  exports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule,
    RouterModule,
    CoACLModule,
    CoFormModule,
    CoCommonModule,
    CoLayoutComponentsModule,
    // i18n
    TranslateModule,
    ...SHARED_CO_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule { }
