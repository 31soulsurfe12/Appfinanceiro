import { ModalContasPage } from './../pages/modal-contas/modal-contas';
import { ContasPage } from './../pages/contas/contas';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContasProvider } from '../providers/contas/contas';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { LancamentosProvider } from '../providers/lancamentos/lancamentos';
import { LancamentosPage } from '../pages/lancamentos/lancamentos';
import { ModalLancamentosPage } from '../pages/modal-lancamentos/modal-lancamentos';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContasPage,
    ModalContasPage,
    LancamentosPage,
    ModalLancamentosPage,
    
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
    ContasPage,
    ModalContasPage,
    LancamentosPage,
    ModalLancamentosPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ContasProvider,
    SQLite,
    DatabaseProvider,
    LancamentosProvider,
    
    
  ]
})
export class AppModule {}
