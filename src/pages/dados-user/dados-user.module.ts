import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosUserPage } from './dados-user';

@NgModule({
  declarations: [
    DadosUserPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosUserPage),
  ],
})
export class DadosUserPageModule {}
