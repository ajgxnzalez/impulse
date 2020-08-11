import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosageTrackingPageRoutingModule } from './dosage-tracking-routing.module';

import { DosageTrackingPage } from './dosage-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosageTrackingPageRoutingModule
  ],
  declarations: [DosageTrackingPage]
})
export class DosageTrackingPageModule {}
