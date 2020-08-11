import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotsentPage } from './forgotsent.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotsentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotsentPageRoutingModule {}
