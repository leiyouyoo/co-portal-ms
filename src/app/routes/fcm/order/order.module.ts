import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PackingListComponent } from './order-detail/component/packing-list/packing-list.component';

const COMPONENTS = [
  OrderListComponent,
  OrderDetailComponent,
  PackingListComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
