import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECTradeComponent } from './trade/list.component';


const routes: Routes = [
  { path: 'trade', component: ECTradeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECRoutingModule { }
