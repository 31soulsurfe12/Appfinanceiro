import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PARAMETERS } from '@angular/core/src/util/decorators';



@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {

  view: any;
  conta: any;
  viewCtrl: any;

  constructor( viewCtrl: ViewController, params: NavParams) {

    this.view = viewCtrl;
    this.conta = params.get("parametro") || {descricao: ""};

  }

  cancel(){
    this.view.dismiss();
  }
  salvar(){
    this.view.dismiss(this.conta);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }

}
