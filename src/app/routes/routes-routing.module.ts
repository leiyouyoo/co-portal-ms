import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@layout';

import { LayoutPassportComponent } from '../layout/passport/passport.component';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLockComponent } from './passport/lock/lock.component';

import { EmptyComponent } from '@co/cms';
import { CoConfigManager } from '@co/core';
import { LoginComponent } from './passport/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titleI18n: 'app.home', reuse: true, icon: 'icon-logo', reuseClosable: false },
      },
      {
        path: 'exception',
        loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule),
      },
    ],
  },
  // {
  //   path: 'csp',
  //   component: MainLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: EmptyComponent,
  //       children: [
  //         {
  //           path: '**',
  //           component: EmptyComponent,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'exception',
  //       loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule),
  //     },
  //   ],
  // },

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

const apps: any[] = CoConfigManager.getSection('apps');
apps?.forEach((a) => {
  if (a.name !== 'csp') {
    routes[0].children.push({
      path: a.name,
      component: EmptyComponent,
      children: [
        {
          path: '**',
          component: EmptyComponent,
        },
      ],
    });
  }
});

/**
 * 门户路由模块
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
