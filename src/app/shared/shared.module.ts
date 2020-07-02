import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { RouterModule } from '@angular/router';
import { CoACLModule } from '@co/acl';
import { CoFormModule } from '@co/form';
import { TranslateModule } from '@ngx-translate/core';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CountdownModule } from 'ngx-countdown';
import { DragulaModule } from 'ng2-dragula';


const THIRDMODULES = [CountdownModule, DragDropModule];
// #endregion

// #region your componets & directives
import { PRO_SHARED_COMPONENTS } from '../layout/pro';
import { AddressComponent } from './components/address/address.component';
import { DelayDirective } from './components/delay/delay.directive';
import { EditorComponent } from './components/editor/editor.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ImgComponent } from './components/img/img.component';
import { ImgDirective } from './components/img/img.directive';
import { LangsComponent } from './components/langs/langs.component';
import { MasonryDirective } from './components/masonry/masonry.directive';
import { MouseFocusDirective } from './components/mouse-focus/mouse-focus.directive';
import { QUICK_CHAT_COMPONENTS } from './components/quick-chat';
import { ScrollbarDirective } from './components/scrollbar/scrollbar.directive';
import { StatusLabelComponent } from './components/status-label/status-label.component';
import { TableHeadDragComponent } from './components/table-head-drag/table-head-drag.component';
import { ShipmentListItemComponent } from './components/shipment-list-item/shipment-list-item.component';
import { ListPopoverComponent } from './components/shipment-list-item/list-popover/list-popover.component';



const COMPONENTS_ENTRY = [
  LangsComponent,
  ImgComponent,
  FileManagerComponent,
  StatusLabelComponent,
  AddressComponent,
  TableHeadDragComponent,
  ShipmentListItemComponent,
  ListPopoverComponent,
  ...QUICK_CHAT_COMPONENTS,
];
const COMPONENTS = [EditorComponent, ...COMPONENTS_ENTRY, ...PRO_SHARED_COMPONENTS];
const DIRECTIVES = [ImgDirective, DelayDirective, MasonryDirective, ScrollbarDirective, MouseFocusDirective];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    RouterModule,
    ReactiveFormsModule,
    CoACLModule,
    CoFormModule,
    DragulaModule.forRoot(),
    ...SHARED_DELON_MODULES,
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
    // i18n
    TranslateModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule { }
