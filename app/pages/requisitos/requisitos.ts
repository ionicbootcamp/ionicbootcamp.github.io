import {Component} from '@angular/core';
import {Nav} from 'ionic-angular';
import {Cidades} from '../../pages/cidades/cidades';


@Component({
  templateUrl: 'build/pages/requisitos/template.html'
})
export class Requisitos {
  nav:Nav;
  constructor(nav:Nav) {
    this.nav = nav;
  }

  openRegister(){
    this.nav.setRoot(Cidades);
  }
}
