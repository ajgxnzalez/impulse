import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosageTrackingPage } from './dosage-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: DosageTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosageTrackingPageRoutingModule {}
