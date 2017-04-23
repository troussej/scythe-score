import { Score } from './score.model';
import { Game } from './game.model';
import { Faction } from './faction.model';
export class Player {
    name: String = '';
    score: Score;
    config: any;

    faction: Faction;


    constructor(config: any, game: Game, name?: String, ) {
        this.name = name;


        this.config = config;
        this.score = new Score(game, config);
    }
}