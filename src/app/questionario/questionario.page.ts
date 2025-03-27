import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})
export class QuestionarioPage {
  perguntas = [
    { texto: "Usa os verbos corretamente?" },
    { texto: "Comportamento repetitivo?" },
    { texto: "Sensibilidade ao som?" },
    { texto: "Sensibilidade ao toque físico?" },
    { texto: "Faz contato visual?" },
    { texto: "Expressa ideias?" },
    { texto: "Dificuldade na fala?" },
    { texto: "Interesses em objetos?" }
  ];

  respostas: boolean[] = new Array(this.perguntas.length).fill(false);

  constructor(private navCtrl: NavController) {}

  enviarRespostas() {
    console.log("Respostas:", this.respostas);
    alert("Respostas enviadas!");
    this.navCtrl.navigateForward('/graficos'); // Para a tela de gráficos
  }
}