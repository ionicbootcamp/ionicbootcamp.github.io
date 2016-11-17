import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'template.html'
})
export class Cidades {
  cidades:Array<Object>;
  platform:Platform;

  constructor(platform:Platform) {
    this.platform = platform;

    this.cidades = [
      {
        name: 'São Paulo - SP',
        date: '13 de Novembro',
        image: 'assets/img/cidades/sp.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-sao-paulo/?curso=ionic'
      },
      {
        name: 'Belo Horizonte - MG',
        date: '26 de Novembro',
        image: 'assets/img/cidades/bh.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-bh/?curso=ionic'
      },
      {
        name: 'Aracaju - SE',
        date: '4 de Dezembro',
        image: 'assets/img/cidades/aju.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-aracaju/?curso=ionic'
      },
      {
        name: 'Ribeirão Preto - SP',
        date: '10 de Dezembro',
        image: 'assets/img/cidades/Ribeirão.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-ribeirao-preto/?curso=ionic'
      },
      {
        name: 'São Luis - MA',
        date: '17 de Dezembro',
        image: 'assets/img/cidades/sl.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-sao-luis/?curso=ionic'
      },
      {
        name: 'Cuiabá - MT',
        date: '21 de Janeiro',
        image: 'assets/img/cidades/cuiaba.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-cuiaba/?curso=ionic'
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