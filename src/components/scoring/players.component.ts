import { Component } from '@angular/core';
import { PointSheet } from './points-sheet.component';
import { AlertController } from 'ionic-angular';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

import * as _ from "lodash";
@Component({
    selector: 'scsc-players',
    templateUrl: 'players.html',

})
export class Players extends PointSheet {
    constructor(private alertCtrl: AlertController, private service: PlayerService) {
        super();
    }

    editPlayer(player: Player): void {
        this.service.editPlayer(player);

    }
}


