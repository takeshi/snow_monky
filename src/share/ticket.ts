import * as _ from 'lodash';

export class Ticket {

    static of(properties: { title: string, desc: string }) {
        return _.merge(new Ticket(), properties);
    }

    title: string;
    desc: string;

    toString() {
        return `<${this.title}> ${this.desc}`;
    }

}