import {Component} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Cidades} from '../../pages/cidades/cidades';


@Component({
  templateUrl: 'template.html'
})
export class Instrutor {
  nav:Nav;
  platform:Platform;

  constructor(nav:Nav, platform:Platform) {
    this.nav = nav;
    this.platform = platform;
  }

  openSite(url:string){
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open(url, '_blank');
    } else {
      InAppBrowser.open(url, "_system");
    }
  }

  openRegister(){
    this.nav.setRoot(Cidades);
  }
}
