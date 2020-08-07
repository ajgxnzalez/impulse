import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { SyncDeviceComponent } from './sync-device/sync-device.component';
import { GamesComponent } from './games/games.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketingComponent,
    AddDeviceComponent,
    PreOrderComponent,
    SyncDeviceComponent,
    GamesComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
