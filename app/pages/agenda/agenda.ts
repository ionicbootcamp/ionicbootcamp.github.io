import {Component} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Cidades} from '../../pages/cidades/cidades';


@Component({
  templateUrl: 'build/pages/agenda/template.html'
})
export class Agenda {
  agenda:Array<Object>;
  nav:Nav;
  platform:Platform;

  constructor(nav:Nav, platform:Platform) {
    this.nav = nav;
    this.platform = platform;

    this.agenda = [
      {
        time: "07:30",
        title: "Credenciamento"
      },
      {
        time: "08:00",
        title: "Apresentações",
        description: "Uma visão geral sobre o curso, visão mais aprofundada do cronograma, além de conhecer melhor os alunos e alinhar nossas expectativas sobre o curso."
      },
      {
        time: "08:15",
        title: "O que há de novo no Ionic 2?",
        description: "Uma palestra com uma visão geral sobre o Ionic 2, as mudanças mudanças, os componentes, o uso de TypeScript, as diferenças e os motivos que fizeram o Ionic chegar a esse estado atual."
      },
      {
        time: "09:00",
        title: "Criando nosso primeiro App",
        description: "Vamos utiizar o Ionic-CLI, aprender como criar projetos, os novos comandos, como gerenciar páginas, serviços, entre outros e quais as diferenças de estrutura para o Ionic 1."
      },
      {
        time: "11:00",
        title: "O que há de novo no Angular 2?",
        description: "Mais uma palestra teórica sobre as novidades do Angular 2 e sua integração com o Ionic 2. Falaremos um pouco mais sobre TypeScript, as motivações por trás do Angular 2 e por quê ele funciona tão bem para desenvolvimento de Apps robustos."
      },
      {
        time: "12:00",
        title: "Almoço",
      },
      {
        time: "14:00",
        title: "Debugando Aplicativos Híbridos"
      },
      {
        time: "14:15",
        title: "RSS Reader App",
        description: "Primeiro app que iremos desenvolver durante o curso. Um simples leitor de RSS de um blog ou podcast."
      },
      {
        time: "15:00",
        title: "Firebase App",
        description: "Segundo app, onde aprendemos a usar o banco de dados em tempo real do Firebase, Firebase Auth para registro dos usuários e teremos um exemplo de upload de arquivo, usando a câmera do usuário."
      },
      {
        time: "16:15",
        title: "YouTube Channel App",
        description: "Neste app iremos usar a API do YouTube para criar uma aplicação que lista e exibe vídeos de um canal no YouTube dentro do próprio aplicativo. Também aprenderemos a exibir anúncios num aplicativo."
      },
      {
        time: "17:30",
        title: "Intervalo"
      },
      {
        time: "17:50",
        title: "BitBar",
        description: "Último app e nosso chefão. Iremos criar um app que procura bares de uma região e o usuário pode pedir um Uber direto pra lá. Usaremos as APIs do Google Maps, Foursquare e Uber, além de vários plugins do Ionic Native.",
      },
      {
        time: "19:20",
        title: "Enviando pras lojas",
        description: "Veremos como empacotar sua aplicação, assina-la e enviar para as lojas (Google Play e App Store)"
      },
      {
        time: "19:45",
        title: "Entrega dos certificados",
        description: ""
      },
      {
        time: "19:45",
        title: "Encerramento",
        description: ""
      }
    ]
  }

  openBitBar(){
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open('https://play.google.com/store/apps/details?id=space.joselito.bitbar', '_blank');
    } else {
      InAppBrowser.open("https://play.google.com/store/apps/details?id=space.joselito.bitbar", "_system");
    }
  }

  openRegister(){
    this.nav.setRoot(Cidades);
  }
}
