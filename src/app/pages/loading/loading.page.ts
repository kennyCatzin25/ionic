import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;
  constructor (public loadingController: LoadingController) { }
  async presentLoading( mensaje: string) {
    this.loading = await this.loadingController.create({
      message: mensaje,
      
    });
    return this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  ngOnInit() {
    this.presentLoading('Espere');

    setTimeout(()=>{
      this.loading.dismiss();
    }, 1500);
  }

}
