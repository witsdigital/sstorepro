import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  //api:string = 'http://localhost/balconapi/';
  // api:string = 'http://localhost/service/';
  api: string = 'http://www.servico.store/';

  constructor(public http: Http) {

    console.log('Hello ServiceProvider Provider');
  }
  getData() {
    return this.http.get(this.api + 'api/getVendasapp').map(res => res.json())
  }

  getServicos() {
    return this.http.get(this.api + 'servicos/getServicos').map(res => res.json())

  }
  getCat() {
    return this.http.get(this.api + 'servicos/getAppCat').map(res => res.json())
  }
  getServByCat(cat) {
    return this.http.get(this.api + 'servicos/getByCat/' + cat).map(res => res.json())
  }
  getUserApp(cat) {
    return this.http.get(this.api + 'usuario/getUserApp/' + cat).map(res => res.json())
  }

  getdestaques() {
    return this.http.get(this.api + 'servicos/getDestaques/').map(res => res.json())
  }

  getCidades() {
    return this.http.get(this.api + 'cidades/getapp/').map(res => res.json())
  }

  getRespByServ(cat) {
    return this.http.get(this.api + 'servicos/getByserv/' + cat).map(res => res.json())
  }

  getCountRespByCat(cat) {
    return this.http.get(this.api + 'servicos/getCountResp/' + cat).map(res => res.json())
  }
  getDataItens(id) {
    return this.http.get(this.api + 'api/getVendasItensApp/' + id).map(res => res.json())
  }
  getClientes() {
    return this.http.get(this.api + 'api/getClientesapp').map(res => res.json())
  }



  getProdutos() {
    return this.http.get(this.api + 'api/getProdutosApp').map(res => res.json())
  }
  loginuser(parans) {
    return this.http.post(this.api + 'apilogin/logarapp', parans).map(res => res.json())
  }

  getOrc(parans) {
    return this.http.post(this.api + 'orcamentos/getOrc', parans).map(res => res.json())
  }

  getOrcs(parans) {
    return this.http.post(this.api + 'orcamentos/getOrcs', parans).map(res => res.json())
  }
  getBairro() {
    return this.http.get(this.api + 'Cidades/getBairro').map(res => res.json())
  }

  getSol(parans) {
    return this.http.post(this.api + 'orcamentos/getSolic', parans).map(res => res.json())
  }

  postDatas(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/logarapp', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  getUser(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/getuser', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  updateUser(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/updateUser', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }



  getOrcamentos(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getallorcbyuser', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  getCliente(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getcliente', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  getOrcamentosAber(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getallorcaberto', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  getOrcamentosResp(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getorcrespondidos', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  getPedidosFinal(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getPedidosFinal', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


  getimagensorc(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/getimagensorc', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


  getped(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'pedido/getpedidofornecedor', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }




  postOrc(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'Orcamentos/newOrc', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postRespOrc(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'Orcamentos/respOrc', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  upPass(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/updatePass', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postCadUser(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/cadastropp', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postPass(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'apilogin/recpass', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }



  getSaldo(id) {
    return this.http.get(this.api + 'saldo/getsaldo/' + id).map(res => res.json())
  }


  setCancelOrcs(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'orcamentos/setcancelorcs', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }





  postMensagem(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'chat/newmensagem', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


  getMensagens(id1) {
    return this.http.get(this.api + 'chat/getmensagens/' + id1).map(res => res.json())
  }


  newChat(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.api + 'chat/newchat', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


  getChat(id1, id2) {
    return this.http.get(this.api + 'chat/getchat/?id=' + id1 + '&id2=' + id2).map(res => res.json())
  }


  getMedia(parans) {
    return this.http.post(this.api + 'pedido/getmedia', parans).map(res => res.json())
  }


}
