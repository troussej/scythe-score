import { Component } from '@angular/core';
import { PointSheet } from './points-sheet.component';
import { Player } from '../../models/player.model';
import { Game } from '../../models/game.model';

import * as _ from "lodash";
@Component({
    selector: 'scsc-territories',
    templateUrl: 'territories.html',

})
export class Territories extends PointSheet {


    updateFactoryOwner(event: any, player: Player) {

        if (event.checked) {
            this.game.setFactoryOwner(player);
        }
    }
}