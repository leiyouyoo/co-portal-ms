import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CoDocumentComponent } from './co-document/co-document.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PackingListComponent } from './order-detail/component/packing-list/packing-list.component';
import { OrderInfoComponent } from './order-detail/component/order-info/order-info.component';
import { ShipmentListItemComponent } from './order-detail/component/shipment-list-item/shipment-list-item.component';
import { ListPopoverComponent } from './order-detail/component/shipment-list-item/list-popover/list-popover.component';
import { ShipmentStatusPipe } from './order-detail/pipe/shipment-status.pipe';
import { EnterWarehouseModalComponent } from './order-detail/component/enter-warehouse-modal/enter-warehouse-modal.component';
import { AcceptListComponent } from './order-list/accept-list/accept-list.component';

const COMPONENTS = [
  OrderListComponent,
  OrderDetailComponent,
  CoDocumentComponent,
  AddOrderComponent,
  PackingListComponent,
  OrderInfoComponent,
  ShipmentListItemComponent,
  ListPopoverComponent,
  ShipmentStatusPipe,
  EnterWarehouseModalComponent,
  AcceptListComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, CommonModule, OrderRoutingModule],
})
export class OrderModule {}
