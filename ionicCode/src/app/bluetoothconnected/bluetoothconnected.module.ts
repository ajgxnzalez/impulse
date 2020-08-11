import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothconnectedPageRoutingModule } from './bluetoothconnected-routing.module';

import { BluetoothconnectedPage } from './bluetoothconnected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothconnectedPageRoutingModule
  ],
  declarations: [BluetoothconnectedPage]
})
export class BluetoothconnectedPageModule {}
