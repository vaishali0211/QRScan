import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { QrScannerDataPage } from '../modals/qr-scanner-data/qr-scanner-data.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scannedData: any ={};
  encodedData: '';
  encodeData: any;
  inputData: any;
  isLightOn = false;
 
  constructor(
    private barcodeScanner: BarcodeScanner,
    public modalController: ModalController) {}

    ngOnInit(): void {
     this.getData()
    }

    // for added name in QR SCANNER

   getData(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
   

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: true,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: "QR_CODE,PDF_417",
      orientation: 'portrait',
       saveHistory: true, 
    };

    this.barcodeScanner.scan(options).then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
      

    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  disableLight() {
    this.isLightOn = false;
    this.barcodeScanner.scan().then();
  }

  async presentModal(qrData) {
    // open modal and pass data to it 
    const modal = await this.modalController.create({
      component: QrScannerDataPage,
      componentProps: { qrCodeData: qrData }
    });

    this.disableLight();
    
    await modal.present();
    const { data } = await modal.onDidDismiss();

    this.scanBarcode();
  }

}




