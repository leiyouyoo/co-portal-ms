import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
// import { DelonImModule } from '@im';
import { DEFAULT_LAYOUT_COMPONENTS, DEFAULT_LAYOUT_ENTRYCOMPONENTS } from './default/index';
import { environment } from '@env/environment';
// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [
    SharedModule,
    CDKLayoutModule,
    // DelonImModule.forRoot({
    //   environment,
    // }),
  ],
  entryComponents: DEFAULT_LAYOUT_ENTRYCOMPONENTS,
  declarations: [...DEFAULT_LAYOUT_COMPONENTS, ...PASSPORT],
  exports: [...DEFAULT_LAYOUT_COMPONENTS, ...PASSPORT],
})
export class LayoutModule { }
