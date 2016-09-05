import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/cidades/template.html'
})
export class Cidades {
  cidades:Array<Object>;
  platform:Platform;

  constructor(platform:Platform) {
    this.platform = platform;

    this.cidades = [
      {
        name: 'Fortaleza - CE',
        date: '18 de setembro',
        image: 'img/cidades/fortaleza.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-fortaleza/?curso=ionic'
      },
      {
        name: 'Salvador - BA',
        date: '9 de Outubro',
        image: 'img/cidades/salvador.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-ssa/?curso=ionic'
      },
      {
        name: 'Goiania - GO',
        date: '16 de Outubro',
        image: 'img/cidades/goiania.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-goiania/?curso=ionic'
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