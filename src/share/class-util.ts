import * as _ from 'lodash';

export class ClassUtil<M, T>{

    constructor(private clazz: any) {
        this.of = this.of.bind(this);
        this.list = this.list.bind(this);
    }

    of(properties: T): M {
        return _.merge(new this.clazz(), properties);
    }


    list(properties: T[]): M[] {
        let list: M[] = [];
        properties.forEach((p: T) => {
            list.push(_.merge(new this.clazz(), p));
        });

        return list;

    };

}