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
import {ParceirosPage} from './pages/parceiros/parceiros';
import {UltimosPage} from './pages/ultimos/ultimos';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'build/app.html'
})
class IonicBootcamp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
 // rootPage: any = ParceirosPage;
  pages: Array<{title: string, component: any}>;
  studentPages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private menu: MenuController) {
    this.pages = [
      { title: 'Início', component: Home },
      { title: 'Porquê Angular 2', component: Porque },
      { title: 'Agenda', component: Agenda },
      { title: 'Pré-requisitos', component: Requisitos },
      { title: 'Próximos Bootcamps', component: Cidades },
      { title: 'Últimas Edições', component: UltimosPage },
      { title: 'Instrutor', component: Instrutor },
      { title: 'Parceiros', component: ParceirosPage }
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

  openContact() {
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open("https://store.tampa.works/contato/?curso=ionic", '_blank');
    } else {
      InAppBrowser.open("https://store.tampa.works/contato/?curso=ionic", "_system");
    }
  }

  openSlack() {
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open("https://ionicbootcamp.slack.com", '_blank');
    } else {
      InAppBrowser.open("https://ionicbootcamp.slack.com", "_system");
    }
  }

  openGit() {
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open("https://gitlab.com/groups/ionic-bootcamp", '_blank');
    } else {
      InAppBrowser.open("https://gitlab.com/groups/ionic-bootcamp", "_system");
    }
  }
}

enableProdMode();
ionicBootstrap(IonicBootcamp, [], {
  mode: 'md'
});
