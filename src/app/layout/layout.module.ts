import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DelonImModule } from '@im';
import { PRO_COMPONENTS, PRO_ENTRYCOMPONENTS } from './pro/index';
import { environment } from '@env/environment';
// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [
    SharedModule,
    CDKLayoutModule,
    DelonImModule.forRoot({
      environment,
    }),
  ],
  entryComponents: PRO_ENTRYCOMPONENTS,
  declarations: [...PRO_COMPONENTS, ...PASSPORT],
  exports: [...PRO_COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
