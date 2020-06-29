import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { environment } from '@env/environment';
import { EmptyComponent } from 'ngx-planet';
import { AppRootComponent, AppActualRootComponent } from '../shared/components/root/root.component';

const routes: Routes = [
  {
    path: 'app3',
    component: AppActualRootComponent,
    children: [
      { path: '', redirectTo: 'ec', pathMatch: 'full' },
      { path: 'ec', loadChildren: () => import('./ec1/ec.module').then((m) => m.ECModule) },
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      // scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
