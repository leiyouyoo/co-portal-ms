import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
const routes: Routes = [
    { path: '', redirectTo: 'orderList' },
    { path: 'orderList', component: OrderListComponent },
    { path: 'orderDetail', component: OrderDetailComponent, data: { titleI18n: '订单详情', reuse: true } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }
