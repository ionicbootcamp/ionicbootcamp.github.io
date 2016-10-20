import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'ultimos.html'
})
export class UltimosPage {
  cidades: Array<Object>;
  platform: Platform;

  constructor(platform:Platform) {
    this.platform = platform;

    this.cidades = [
      {
        name: 'Salvador - BA',
        date: '9 de Outubro',
        image: 'assets/img/cidades/salvador.jpg',
        url: 'https://www.facebook.com/ionicbootcamp/photos/?tab=album&album_id=600769813440011'
      },
      {
        name: 'Fortaleza - CE',
        date: '18 de setembro',
        image: 'assets/img/cidades/fortaleza.jpg',
        url: 'https://www.facebook.com/ionicbootcamp/photos/?tab=album&album_id=591996820983977'
      }
    ]
  }

  openSite(url:string){
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open(url, '_blank');
    } else {
      InAppBrowser.open(url, "_system");
    }
  }

}
