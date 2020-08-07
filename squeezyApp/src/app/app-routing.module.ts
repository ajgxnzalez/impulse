import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { LoginComponent } from './login/login.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { SyncDeviceComponent } from './sync-device/sync-device.component';
import { GamesComponent } from './games/games.component';
import { DevicesComponent } from './devices/devices.component';


const routes: Routes = [
  {path: '', component: MarketingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'addDevice', component: AddDeviceComponent},
  {path: 'preOrder', component: PreOrderComponent},
  {path: 'syncDevice', component: SyncDeviceComponent},
  {path: 'game', component: GamesComponent},
  {path: 'devices', component: DevicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
