import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FCMRoutingModule } from './fcm-routing.module';

const COMPONENTS = [
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FCMRoutingModule
  ]
})
export class FcmModule { }
