import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the AbrirPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abrir-pedido',
  templateUrl: 'abrir-pedido.html',
})
export class AbrirPedidoPage {
  dados;
  cliente;
  loader;
  constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 5000
    });
    this.loader.present();

    this.dados = this.navParams.get('item');
    console.log(this.dados);
    this.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbrirPedidoPage');
  }
  getUser() {
    this.service.getUserApp(this.dados.cod_usuario).subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.loader.dismiss();
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }


}
