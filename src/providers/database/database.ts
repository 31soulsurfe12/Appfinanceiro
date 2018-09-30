import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';



@Injectable()
export class DatabaseProvider {

constructor(private sqlite: SQLite) {
    
           
}

public getDB(){
  return this.sqlite.create({
      name:'banco.db',
      location: 'default'
  });
}

 public criarDatabse() {
   return this.getDB()
   .then ((db: SQLiteObject) => {
     this.criarTabelas(db);
   })
.catch(e => console.log(e));

 }
  private criarTabelas(db:SQLiteObject) {
    db.sqlBatch([

      ['CREATE TABLE IF NOT EXISTS contas (id integer primary key AUTOINCREMENT NOT NULL, descricao TEXT )']
      
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas',e));
  }

}