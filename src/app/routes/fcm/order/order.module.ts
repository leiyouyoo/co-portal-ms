import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CoDocumentComponent } from './co-document/co-document.component';
import { AddOrderComponent } from './add-order/add-order.component';
const COMPONENTS = [OrderListComponent, OrderDetailComponent, CoDocumentComponent, AddOrderComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, CommonModule, OrderRoutingModule],
})
export class OrderModule {}
