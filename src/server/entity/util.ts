import * as _ from 'lodash';

export function methods(clazz: any): { [key: string]: Function } {

    let methods: { [key: string]: Function } = {};
    Object.getOwnPropertyNames(clazz.prototype).forEach(name => {
        methods[name] = clazz.prototype[name];
    });
    return methods;

}