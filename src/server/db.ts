/// <reference path="./deps" />

import * as sequelize from 'sequelize';

export let db = new sequelize('snow_monky', 'username', 'password', {

    host: 'localhost',
    dialect: 'sqlite',

    // SQLite only
    storage: 'database.sqlite'

});
