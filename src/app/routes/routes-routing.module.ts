import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { LayoutProComponent } from '@brand';
import { environment } from '@env/environment';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages

import { EmptyComponent } from 'ngx-planet';
import { LoginComponent } from './passport/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { titleI18n: 'app.home', reuse: true, icon: 'snippets' } },
      { path: 'ec', loadChildren: () => import('./ec/ec.module').then((m) => m.ECModule) },
      {
        path: 'exception',
        loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule),
      },
      {
        path: 'fcm',
        data: { titleI18n: 'E-commerce', reuse: true },
        loadChildren: () => import('./fcm/fcm.module').then((m) => m.FcmModule),
      },
    ],
  },
  {
    path: 'app3',
    component: EmptyComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent,
      },
    ],
  },
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: '登录', titleI18n: 'app.login.login' },
      },
      {
        path: 'lock',
        component: UserLockComponent,
        data: { title: '锁屏', titleI18n: 'app.lock' },
      },
    ],
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
