import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import {Home} from '../pages/home/home';
import {Porque} from '../pages/porque/porque';
import {Agenda} from '../pages/agenda/agenda';
import {Requisitos} from '../pages/requisitos/requisitos';
import {Instrutor} from '../pages/instrutor/instrutor';
import {Cidades} from '../pages/cidades/cidades';
import {Validar} from '../pages/validar/validar';
import {ParceirosPage} from '../pages/parceiros/parceiros';
import {UltimosPage} from '../pages/ultimos/ultimos';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Porque,
    Agenda,
    Requisitos,
    Instrutor,
    Cidades,
    Validar,
    ParceirosPage,
    UltimosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Porque,
    Agenda,
    Requisitos,
    Instrutor,
    Cidades,
    Validar,
    ParceirosPage,
    UltimosPage
  ],
  providers: []
})
export class AppModule {}
