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
      },
      {
        name: 'São Luis - MA',
        date: '23 de Outubro',
        image: 'img/cidades/sl.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-sao-luis/?curso=ionic'
      },
      {
        name: 'Foz do Iguaçu - PR',
        date: '28 de Outubro',
        image: 'img/cidades/foz.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-foz-do-iguacu/?curso=ionic'
      },
      {
        name: 'Belo Horizonte - MG',
        date: '6 de Novembro',
        image: 'img/cidades/bh.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-bh/?curso=ionic'
      },
      {
        name: 'Ribeirão Preto - SP',
        date: '10 de Dezembro',
        image: 'img/cidades/Ribeirão.jpg',
        url: 'https://store.tampa.works/produto/ionic-bootcamp-ribeirao-preto/?curso=ionic'
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