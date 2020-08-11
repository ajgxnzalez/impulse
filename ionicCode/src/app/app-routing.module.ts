import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pre-order',
    loadChildren: () => import('./pre-order/pre-order.module').then( m => m.PreOrderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'forgotsent',
    loadChildren: () => import('./forgotsent/forgotsent.module').then( m => m.ForgotsentPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'dosage-tracking',
    loadChildren: () => import('./dosage-tracking/dosage-tracking.module').then( m => m.DosageTrackingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
