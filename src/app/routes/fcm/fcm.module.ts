import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FCMRoutingModule } from './fcm-routing.module';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FCMRoutingModule
  ],
  exports: [
    TranslateModule
  ]
})
export class FcmModule { }
