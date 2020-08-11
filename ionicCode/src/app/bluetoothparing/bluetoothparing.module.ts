import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothparingPageRoutingModule } from './bluetoothparing-routing.module';

import { BluetoothparingPage } from './bluetoothparing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothparingPageRoutingModule
  ],
  declarations: [BluetoothparingPage]
})
export class BluetoothparingPageModule {}
