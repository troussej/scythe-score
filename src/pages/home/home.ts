import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Game } from '../../models/game.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private game: Game;

  constructor(public navCtrl: NavController) {
    this.game = new Game();
  }

}
