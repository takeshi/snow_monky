import {ClassUtil} from './class-util';

export class Tracker {

    private static util = new ClassUtil<Tracker, {
        name: string
    }>(Tracker);

    static of = Tracker.util.of;
    static list = Tracker.util.list;


    id: number;

    name: string;

}