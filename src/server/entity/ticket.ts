export {Ticket} from '../../share/ticket';

import {db} from './db';
import * as util from './util';
import * as sequelize from 'sequelize';

import {Ticket} from '../../share/ticket';

export interface TicketInstance extends sequelize.Instance<Ticket> {

}

export let TicketModel = db.define<TicketInstance, Ticket>('Ticket',
    {
        title: sequelize.STRING,
        desc: sequelize.STRING
    },
    {
        instanceMethods: util.methods(Ticket)
    });
