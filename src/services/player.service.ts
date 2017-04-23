import { Injectable } from '@angular/core'
import { ModalController } from 'ionic-angular';
import { Player } from '../models/player.model'
import { Game } from '../models/game.model'
import { PlayerForm } from '../components/player/player-form.component'
import { config } from '../config/config';

@Injectable()
export class PlayerService {

    constructor(public modalCtrl: ModalController) {

    }

    editPlayer(player: Player) {
        let prompt = this.createPrompt(player)
        prompt.present();
    }

    addPlayer(game: Game) {
        let prompt = this.createPrompt(new Player(config, game));
        prompt.onDidDismiss(data => {
            console.log('onDidDismiss', data)
            if (data.success) {
                game.players.push(data.player);
            }
        });
        prompt.present();
    }

    private createPrompt(player: Player): any {
        return this.modalCtrl.create(PlayerForm, { player: player });
    }
}
