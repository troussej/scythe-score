import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { Game } from '../../models/game.model';
import { config } from '../../config/config';
import { AlertController } from 'ionic-angular';
import * as _ from "lodash";
@Component({
    selector: 'scsc-points-sheet',
    templateUrl: 'points-sheet.html',

})
export class PointSheet {

    @Input() game: Game;
    @Input() definition: any;
    protected config: any = config;

    constructor(public alertCtrl: AlertController) {

    }



    public convertToNumber(event): number { return +event; }


}
