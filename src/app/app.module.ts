import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContasPage } from '../pages/contas/contas';
import { ContasProvider } from '../providers/contas/contas';
import { ModalContasPage } from '../pages/modal-contas/modal-contas';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { LancamentosProvider } from '../providers/lancamentos/lancamentos';
import { LancamentosPage } from '../pages/lancamentos/lancamentos';

import { ModalLancamentosPage } from '../pages/modal-lancamentos/modal-lancamentos';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../pipes/status/status';
import { SaldoPage } from '../pages/saldo/saldo';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //ContasPage,
    ModalContasPage,
    LancamentosPage,
    ModalLancamentosPage,
    StatusPipe,
    //SaldoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LancamentosPage,
    ModalContasPage,
    //ContasPage,
    ModalLancamentosPage,
    //SaldoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    ContasProvider,
    SQLite,
    DatabaseProvider,
    LancamentosProvider,
    DatePipe
    
  ]
})
export class AppModule {}
