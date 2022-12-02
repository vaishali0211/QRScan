import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScannerDataPage } from './qr-scanner-data.page';

const routes: Routes = [
  {
    path: '',
    component: QrScannerDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrScannerDataPageRoutingModule {}
