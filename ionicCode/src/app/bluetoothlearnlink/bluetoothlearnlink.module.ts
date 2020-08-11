import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothlearnlinkPageRoutingModule } from './bluetoothlearnlink-routing.module';

import { BluetoothlearnlinkPage } from './bluetoothlearnlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothlearnlinkPageRoutingModule
  ],
  declarations: [BluetoothlearnlinkPage]
})
export class BluetoothlearnlinkPageModule {}
