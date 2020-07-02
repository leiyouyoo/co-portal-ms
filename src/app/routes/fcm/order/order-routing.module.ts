import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
const routes: Routes = [
    { path: '', redirectTo: 'orderList' },
    { path: 'orderList', component: OrderListComponent },
    { path: 'orderDetail', component: OrderDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }
