import * as _ from 'lodash';
import * as sequelize from 'sequelize';
import {db} from '../db';

export default class EntityUtil {

    static toMethods(clazz: any): { [key: string]: Function } {

        let methods: { [key: string]: Function } = {};
        Object.getOwnPropertyNames(clazz.prototype).forEach(name => {
            methods[name] = clazz.prototype[name];
        });

        return methods;

    }

    static model<Instance, Attribute>(clazz: any, attributes: sequelize.DefineAttributes, options?: sequelize.DefineOptions<Instance>) {
        return db.define<Instance, Attribute>(clazz.name, attributes,
            _.merge({
                instanceMethods: EntityUtil.toMethods(clazz)
            }, options || {}));
    }

}
 