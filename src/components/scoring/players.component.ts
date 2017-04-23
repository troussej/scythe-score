import { Component } from '@angular/core';
import { PointSheet } from './points-sheet.component';
import { AlertController } from 'ionic-angular';
import { Player } from '../../models/player.model';

import * as _ from "lodash";
@Component({
    selector: 'scsc-players',
    templateUrl: 'players.html',

})
export class Players extends PointSheet {
    constructor(private alertCtrl: AlertController) {
        super();
    }

    editPlayer(player: Player): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit player',

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
                        if (!_.isEmpty(data.name)) {
                            console.log('edit player', data)
                            player.name = data.name;
                        }
                    }
                }
            ]
        });
        prompt.present();

    }
}


