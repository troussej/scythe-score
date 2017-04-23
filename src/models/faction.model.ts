import * as _ from "lodash";
export class Faction {
    name: string;
    longName: string;
    logo: string;

    constructor(obj) {
        this.logo = _.assignIn(this, obj);
    }
}