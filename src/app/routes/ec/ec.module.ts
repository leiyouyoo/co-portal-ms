import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { ECRoutingModule } from './ec-routing.module';

import { ECTradeComponent } from './trade/list.component';
import { ECTradeComponent1 } from './trade1/list.component';
import { ECTradeComponent2 } from './trade2/list.component';
import { ECTradeComponent3 } from './trade3/list.component';
import { ECTradeComponent4 } from './trade4/list.component';
import { ECTradeComponent5 } from './trade5/list.component';
import { ECTradeComponent6 } from './trade6/list.component';

const COMPONENTS = [
  ECTradeComponent,
  ECTradeComponent1,
  ECTradeComponent2,
  ECTradeComponent3,
  ECTradeComponent4,
  ECTradeComponent5,
  ECTradeComponent6,
];

const COMPONENTS_NOROUNT = [
];

@NgModule({
  imports: [SharedModule, ECRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ECModule { }
