/// <reference path="./deps" />

import * as sequelize from 'sequelize';
import * as _ from 'lodash';

(<any>global)['Sequelize'] = {
    shimmerWap: function(object: any, functionName: string, fnArgs: number[], args: any[]) {
        for (let x = 0; x < fnArgs.length; x++) {
            let argIndex = fnArgs[x] < 0 ? args.length + fnArgs[x] : fnArgs[x];
            if (argIndex < args.length && typeof args[argIndex] === 'function') {
                args[argIndex] = Zone.current.wrap(args[argIndex], functionName);
            }
        }
    }
};

export let db = new sequelize('snow_monky', 'username', 'password', {

    host: 'localhost',
    dialect: 'sqlite',

    // SQLite only
    storage: 'database.sqlite',

    logging: function(message: string) {
        console.log('[' + Zone.current.name + ']', message);
    }

});
