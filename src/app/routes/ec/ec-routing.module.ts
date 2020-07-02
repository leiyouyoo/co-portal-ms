import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECTradeComponent } from './trade/list.component';
import { ECTradeComponent1 } from './trade1/list.component';
import { ECTradeComponent2 } from './trade2/list.component';
import { ECTradeComponent3 } from './trade3/list.component';
import { ECTradeComponent4 } from './trade4/list.component';
import { ECTradeComponent5 } from './trade5/list.component';
import { ECTradeComponent6 } from './trade6/list.component';

const routes: Routes = [
  { path: 'trade', component: ECTradeComponent, data: { reuse: true } },
  { path: 'trade1', component: ECTradeComponent1, data: { reuse: true } },
  { path: 'trade2', component: ECTradeComponent2, data: { reuse: true } },
  { path: 'trade3', component: ECTradeComponent3, data: { reuse: true } },
  { path: 'trade4', component: ECTradeComponent4, data: { reuse: true } },
  { path: 'trade5', component: ECTradeComponent5, data: { reuse: true } },
  { path: 'trade6', component: ECTradeComponent6, data: { reuse: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECRoutingModule { }
