import { ContasProvider } from './../../providers/contas/contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Conta } from '../../providers/contas/contas';
import { ContasPage } from '../contas/contas';



@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {

  view: any;
  classeConta: Conta

  constructor( 
    public navCtrl: NavController, 
    public params: NavParams,
    private providerContas:ContasProvider,
    private toast:ToastController
    ) {
    
    this.classeConta = new Conta();
  }

  cancel(){
    this.view.dismiss();
  }
  save() {
    this.salvarConta()
      .then(() => {
        this.toast.create({ message: 'Conta salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
        this.navCtrl.push(ContasPage);
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a conta.', duration: 3000, position: 'botton' }).present();
      });
  }

private salvarConta(){
  return this.providerContas.insert(this.classeConta);
}


  }


