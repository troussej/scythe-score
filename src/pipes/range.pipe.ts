import { Pipe, PipeTransform } from '@angular/core'
import * as _ from "lodash";

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
    transform(value, min, max): any {
        let values = [];
        if (_.isNumber(min) && _.isNumber(max)) {
            values = Array(max - min + 1)
                .fill(0)
                .map((x, i) => i + min);
        }
        return values;
    }
}