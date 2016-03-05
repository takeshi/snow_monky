import * as _ from 'lodash';
import {Tracker} from './tracker';
import {ClassUtil} from './class-util';

export class Ticket {

    private static util = new ClassUtil<Ticket, {
        title: string,
        desc: string,
        tracker?: Tracker,
        trackerId?: number
    }>(Ticket);

    static of = Ticket.util.of;
    static list = Ticket.util.list;

    id: number;

    title: string;

    desc: string;

    trackerId: number;
    tracker: Tracker;

    toString() {
        return `<${this.title}> ${this.desc}`;
    }

}