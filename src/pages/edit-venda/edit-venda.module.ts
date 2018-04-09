import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditVendaPage } from './edit-venda';

@NgModule({
  declarations: [
    EditVendaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditVendaPage),
  ],
  exports: [
    EditVendaPage
  ]
})
export class EditVendaPageModule {}
