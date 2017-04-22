export class Score {

    territories: number = 0;
    popularity: number = 0;
    resources: number = 0;
    money: number = 0;
    stars: number = 0;
    config: any;
    buildings: number = 0;

    constructor(config: any) {
        this.config = config;
    }
    //  rules: {
    //         points: {
    //             stars: {
    get starsRate(): number {
        return this.config.rules.points.stars[this.popularity];
    }

    get starsTotal(): number {
        return this.starsRate * this.stars
    }

    get territoriesRate(): number {
        return this.config.rules.points.territories[this.popularity];
    }
    get territoriesTotal(): number {
        return this.territoriesRate * this.territories;
    }
    get resourcesRate(): number {
        return this.config.rules.points.resources[this.popularity];
    }
    get resourcesTotal(): number {
        return Math.floor(this.resources / 2) * this.resourcesRate;
    }
    get total(): number {
        return this.money + this.starsTotal + this.territoriesTotal + this.resourcesTotal;
    }
}