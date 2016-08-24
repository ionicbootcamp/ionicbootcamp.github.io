import {Component, ViewChild, enableProdMode} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Home} from './pages/home/home';
import {Porque} from './pages/porque/porque';
import {Agenda} from './pages/agenda/agenda';
import {Requisitos} from './pages/requisitos/requisitos';
import {Instrutor} from './pages/instrutor/instrutor';
import {Depoimentos} from './pages/depoimentos/depoimentos';
import {Cidades} from './pages/cidades/cidades';
import {Company} from './pages/company/company';
import {Validar} from './pages/validar/validar';

@Component({
  templateUrl: 'build/app.html'
})
class IonicBootcamp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
  pages: Array<{title: string, component: any}>;
  studentPages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private menu: MenuController) {
    this.pages = [
      { title: 'Início', component: Home },
      { title: 'Porquê Angular 2', component: Porque },
      { title: 'Agenda', component: Agenda },
      { title: 'Pré-requisitos', component: Requisitos },
      { title: 'Próximos Bootcamps', component: Cidades },
      { title: 'Instrutor', component: Instrutor }
    ];
      
    this.studentPages = [
        { title: 'Validar Certificado', component: Validar }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#334b46');
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

enableProdMode();
ionicBootstrap(IonicBootcamp);
