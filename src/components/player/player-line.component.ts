import { Component, Input } from '@angular/core';

import { Player } from '../../models/player.model';
import { config } from '../../config/config';

import * as _ from "lodash";
@Component({
    selector: 'scsc-player-line',
    templateUrl: 'player-line.html',

})
export class PlayerLine {
    @Input()
    protected player: Player;
    protected config = config;

}


