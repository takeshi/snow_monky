import * as _ from 'lodash';

export class Ticket {

    static of(properties: any) {
        return _.merge(new Ticket(), properties);
    }

    title: string;
    desc: string;

    validate(): boolean {
        if (!this.title) {
            return false;
        }
        if (!this.desc) {
            return false;
        }
        return true;
    }

}