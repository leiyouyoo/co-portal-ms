import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myAccountRoutingModule } from './myAccount-routing.module';
import { MyAccComponent } from './component/my-acc/my-acc.component';
import { BaseInfoComponent } from './component/my-acc/base-info/base-info.component';
import { SaftySettingComponent } from './component/my-acc/safty-setting/safty-setting.component';
import { EditPasswordComponent } from './component/my-acc/safty-setting/edit-password/edit-password.component';
import { CoImModule } from '@co/im';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [MyAccComponent, BaseInfoComponent, SaftySettingComponent, EditPasswordComponent],
  imports: [
    CommonModule,
    myAccountRoutingModule,
    // SharedLibraryModule,
    TranslateModule,
    NgZorroAntdModule,
    NzFormModule,
    CoImModule,
    ReactiveFormsModule,
    FormsModule
    // SharedModule
  ],
})
export class MyAccountModule { }
