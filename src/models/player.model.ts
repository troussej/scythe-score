import { Score } from './score.model';
export class Player {
    name: String = '';
    score: Score;
    config: any;

    constructor(name: String, config: any) {
        this.name = name;
        this.config = config;
        this.score = new Score(config);
    }
}