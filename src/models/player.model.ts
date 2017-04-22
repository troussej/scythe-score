import { Score } from './score.model';
export class Player {
    name: String = '';
    score: Score = new Score();

    constructor(name: String) {
        this.name = name;
    }
}