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
  { path: 'trade', component: ECTradeComponent },
  { path: 'trade1', component: ECTradeComponent1 },
  { path: 'trade2', component: ECTradeComponent2 },
  { path: 'trade3', component: ECTradeComponent3 },
  { path: 'trade4', component: ECTradeComponent4 },
  { path: 'trade5', component: ECTradeComponent5 },
  { path: 'trade6', component: ECTradeComponent6 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECRoutingModule { }
