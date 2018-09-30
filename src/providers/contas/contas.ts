
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the ContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContasProvider {

  list:any [];

  constructor(private dbProvider:DatabaseProvider) {
    dbProvider.criarDatabse();
           
  }
 getList(){
   
 }

 insert(conta,sucessCallBack){
   

 }
 edit(conta){

 }
 delete(conta){

 }

}