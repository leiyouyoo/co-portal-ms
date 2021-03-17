import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccComponent } from './component/my-acc/my-acc.component';
import { BaseInfoComponent } from './component/my-acc/base-info/base-info.component';
import { SaftySettingComponent } from './component/my-acc/safty-setting/safty-setting.component';
const routes: Routes = [
  {
    path: "",
    component: MyAccComponent,
    children: [
      {
        path: '',
        redirectTo: "baseInfo"
      },
      {
        path: 'baseInfo',
        component: BaseInfoComponent,
        data: { titleI18n: 'baseinfo', reuse: true }
      },
      {
        path: 'safeSetting',
        component: SaftySettingComponent
      }
    ]
  },


]

// const provider = provideRoutes(routes)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class myAccountRoutingModule { }
