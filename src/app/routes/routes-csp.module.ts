import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingCSPModule } from './routes-routing-csp.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { loginMainComponent } from './passport/login-main/login-main.component';
import { UserLockComponent } from './passport/lock/lock.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { LoginHeadComponent } from './passport/login-head/login-head.component';
import { LoginComponent } from './passport/login.component';
import { ForgotPasswordComponent } from './passport/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './passport/reset-password/reset-password.component';
import { ActivateComponent } from './passport/activate/activate.component';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  loginMainComponent,
  UserLockComponent,
  // single pages
  CallbackComponent,
  LoginHeadComponent,
  LoginComponent,
  loginMainComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  ActivateComponent
];
const COMPONENTS_NOROUNT = [];

/**
 * 门户路由模块
 */
@NgModule({
  imports: [SharedModule, RouteRoutingCSPModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesCSPModule {}
