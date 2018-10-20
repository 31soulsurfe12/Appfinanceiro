import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  abrirSaldo(){
    
    this.navCtrl.push('SaldoPage');
  }

  abrirContas(){
    this.navCtrl.push('ContasPage');
  }

}