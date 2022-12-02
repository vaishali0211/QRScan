import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QrScannerDataPageModule } from './modals/qr-scanner-data/qr-scanner-data.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    QrScannerDataPageModule],
  providers: [
    // StatusBar,
    // SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
