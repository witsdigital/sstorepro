import { DadosUserPage } from './../dados-user/dados-user';
import { Component, ViewChild } from '@angular/core';
import { App, ModalController, Nav, NavController, LoadingController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoginPage } from '../login/login';
import { UpdatePassPage } from '../update-pass/update-pass';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild(Nav) nav: Nav;
  dadosUser: any;
  tabBarElement: any;
  solics: any;
  countpend: any;
  countorcs: any;
  countf: any;
  rate: any;
  para: any;
  orcs: any;
  totalorcs: any;
  totalpedidosf: any;
  pedidosf: any;
  statusorcs: any = true;
  statusfinal: any = true;



  constructor(public service: ServiceProvider, public modal: ModalController, public app: App, public loadingCtrl: LoadingController, private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    if (localStorage.getItem('userData')) {
      this.dadosUser = JSON.parse(localStorage.getItem('userData'));
      console.log(this.dadosUser[0].nome);
      this.service.getMedia(this.dadosUser[0].id_usuario).subscribe(data => {
        this.rate = data[0].media;

      });

    }
    this.getOrcAber();
    this.getSol();
    this.getPedidosFinal();

  }
  share() {
    this.socialSharing.share("Precisando de um profissional pra te dar uma forcinha? Baixe agora o aplicativo Serviços Ja",
      null/*Subject*/, null/*File*/,
      "http://servico.store")

      .then(() => {
        // Sharing via email is possible
      }).catch(() => {
        // Sharing via email is not possible
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  exit() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 6000
    });
    loader.present();
    localStorage.removeItem('userData');
    loader.dismiss();

    this.app.getRootNav().setRoot(LoginPage);

  }


  sair() {
    localStorage.removeItem('userData');


  }

  getSol() {

    this.service.getSol(this.dadosUser[0].id_usuario).subscribe((data) => {
      this.solics = data;
      this.countpend = this.solics.length;
      console.log(this.solics.length);
    }, (erro) => {
      console.log(erro);
    });


  }
  getPedidosFinal() {
    this.para = { user: this.dadosUser[0].id_usuario };
    console.log(this.para);
    this.service.getPedidosFinal(this.para).then((data) => {
      console.log(data);
      this.pedidosf = data;
      this.countf = this.pedidosf.length;
      this.statusfinal = false;

    })


  }

  getOrcAber() {
    this.para = { user: this.dadosUser[0].id_usuario };
    this.service.getOrcamentosAber(this.para).then((data) => {
      this.orcs = data;
      this.countorcs = this.orcs.length;
      this.statusorcs = false;
      console.log(this.orcs);

    })


  }
  updatePass() {
    let modal = this.modal.create(UpdatePassPage);
    modal.present();
  }
  alterDados() {
    let modal = this.modal.create(DadosUserPage);
    modal.present();
  }

}
