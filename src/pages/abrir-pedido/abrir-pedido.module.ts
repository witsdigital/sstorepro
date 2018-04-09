import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbrirPedidoPage } from './abrir-pedido';

@NgModule({
  declarations: [
    AbrirPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AbrirPedidoPage),
  ],
})
export class AbrirPedidoPageModule {}
