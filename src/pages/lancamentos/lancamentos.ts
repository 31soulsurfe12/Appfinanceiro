import { LancamentosProvider } from './../../providers/lancamentos/lancamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalLancamentosPage } from '../modal-lancamentos/modal-lancamentos';
import { ContasProvider } from '../../providers/contas/contas';

/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {


  lista: any [] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerContas: ContasProvider,
    public modalCtrl: ModalController,
    public toast: ToastController,
    public providerLancamentos: LancamentosProvider

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
  }

  insert(){
    let modal = this.modalCtrl.create(ModalLancamentosPage);
    
    modal.present();
  }

}
