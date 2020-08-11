import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotsentPageRoutingModule } from './forgotsent-routing.module';

import { ForgotsentPage } from './forgotsent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotsentPageRoutingModule
  ],
  declarations: [ForgotsentPage]
})
export class ForgotsentPageModule {}
