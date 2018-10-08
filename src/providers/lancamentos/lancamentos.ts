
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
/*
  Generated class for the LancamentosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LancamentosProvider {

  constructor(private dbProvider:DatabaseProvider) {
    dbProvider.criarDatabse();
           
  }


  insert(lancamentos:Lancamentos){
   return this.dbProvider.getDB()
   .then((db: SQLiteObject) => {
     let sql = 'insert into lancamentos (descricao,valor,data,conta,entradaSaida,pago) values(?,?,?,?,?,?)';
     let data = [lancamentos.descricao];
     return db.executeSql(sql,data)

     .catch((e) => console.error(e));

   })
     .catch((e) => console.error(e));
 }
 edit(lancamentos){

 }

}


export class Lancamentos{
   id: number;
   descricao:string;
   valor:number;
   data:string;
   conta:string;
   entradaSaida:string;
   pago:string;
}