import { ModalContasPage } from './../modal-contas/modal-contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ToastController } from 'ionic-angular';
import { ContasProvider } from '../../providers/contas/contas';

/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {
   
  listaContas: any = this.contas.getList();
  
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contas: ContasProvider,
    public modalCtrl: ModalController,
    public toast: ToastController,

    ) {
  }

  ionViewDidLoad() {
   
  }
  insert(){
    let modal = this.modalCtrl.create(ModalContasPage);
    
    modal.present();
  }

}
