import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { ECRoutingModule } from './ec-routing.module';
import { ECTradeComponent } from './trade/list.component';


const COMPONENTS = [
  ECTradeComponent,
];

const COMPONENTS_NOROUNT = [
];

@NgModule({
  imports: [SharedModule, ECRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ECModule { }
