import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrScannerDataPageRoutingModule } from './qr-scanner-data-routing.module';

import { QrScannerDataPage } from './qr-scanner-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerDataPageRoutingModule
  ],
  declarations: [QrScannerDataPage]
})
export class QrScannerDataPageModule {}
