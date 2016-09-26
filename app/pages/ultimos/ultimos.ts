import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/ultimos/ultimos.html',
})
export class UltimosPage {
  cidades: Array<Object>;
  platform: Platform;

  constructor(platform:Platform) {
    this.platform = platform;

    this.cidades = [
      {
        name: 'Fortaleza - CE',
        date: '18 de setembro',
        image: 'img/cidades/fortaleza.jpg',
        url: 'https://www.facebook.com/media/set/?set=a.591996820983977.1073741829.422458497937811&type=1&l=7acfb8f620'
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
