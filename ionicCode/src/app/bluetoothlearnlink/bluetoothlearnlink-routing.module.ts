import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothlearnlinkPage } from './bluetoothlearnlink.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothlearnlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothlearnlinkPageRoutingModule {}
