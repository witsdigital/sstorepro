import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DadosUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-user',
  templateUrl: 'dados-user.html',
})
export class DadosUserPage {
  dadosUser;
  bairros;
  cadastro: any = {};
  statuspage = false;
  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getdados();
    this.getbairros();
  }

  getdados() {
    let loader = this.loadingCtrl.create({
      content: "carregando...",
      duration: 16000
    });
    loader.present();
    this.dadosUser = JSON.parse(localStorage.getItem('userData'));
    console.log(this.dadosUser[0].nome);
    this.service.getUser(this.dadosUser[0].id_usuario).then(data => {
      this.cadastro = data[0];
      loader.dismiss();
      this.statuspage = true;
    });
  }
  salvar(item) {
    let loader = this.loadingCtrl.create({
      content: "salvando...",
      duration: 6000
    });
    loader.present();
    this.service.updateUser(item).then(data => {
      console.log(data);
      this.getdados();
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Salvo com sucesso!',
        duration: 3000,
        position: 'top',
        //cssClass: "toast-success"
      });

      toast.present();
      this.fechar();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosUserPage');
  }
  getbairros() {
    this.service.getBairro().subscribe(data => {
      this.bairros = data;
      console.log(this.bairros);
    });
  }
  fechar() {
    this.viewCtrl.dismiss();

  }



}
