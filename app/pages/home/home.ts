import {Component} from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Agenda} from '../../pages/agenda/agenda';
import {Cidades} from '../../pages/cidades/cidades';


@Component({
  templateUrl: 'build/pages/home/template.html'
})
export class Home {
  nav:Nav;
  platform:Platform;

  constructor(nav: Nav, platform: Platform) {
    this.nav = nav;
    this.platform = platform;
  }

  openAgenda(){
    this.nav.setRoot(Agenda);
  }

  openRegister(){
    this.nav.setRoot(Cidades)
  }
}
