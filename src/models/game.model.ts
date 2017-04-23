import { Player } from './player.model';
import * as _ from "lodash";
export class Game {
    players: Player[] = [];
    buildingRule: any;

    setFactoryOwner(player: Player) {

        player.score.ownsFactory = true;
        _.forEach(this.players, p => {
            if (!_.eq(p, player)) {
                p.score.ownsFactory = false;
            }
        })
    }
}