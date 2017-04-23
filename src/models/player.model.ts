import { Score } from './score.model';
import { Game } from './game.model';
export class Player {
    name: String = '';
    score: Score;
    config: any;
    game: Game;

    constructor(name: String, game: Game, config: any) {
        this.name = name;
        this.game = game;
        this.config = config;
        this.score = new Score(game, config);
    }
}