import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { Game } from '../../models/game.model';
import { config } from '../../config/config';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'scsc-player-list',
    templateUrl: 'players.html',

})
export class PlayerList {

    @Input() game: Game;

    constructor(public alertCtrl: AlertController) {

    }

    showAddPlayer(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add player',

            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('save new player', data)
                        this.game.players.push(new Player(data.name))
                    }
                }
            ]
        });
        prompt.present();

    }

}
