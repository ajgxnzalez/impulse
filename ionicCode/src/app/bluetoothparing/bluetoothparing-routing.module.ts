import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothparingPage } from './bluetoothparing.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothparingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothparingPageRoutingModule {}
