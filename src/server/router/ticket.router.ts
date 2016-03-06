import * as express from 'express';

import {Ticket, TicketModel} from '../entity/ticket.entity';
import {db} from '../db';
import {RouterUtil} from './router-util';

export let app = RouterUtil.inZone(express());

app.get('/', async (req, res) => {

    await db.transaction(async (t) => {
        let tickets = await TicketModel.findAll({
            limit: 10,
            transaction: t
        });
        res.json(tickets);
    });
    // res.json({message:'hello'});

});

app.get('/error', async () => {
    throw new Error('sample error');
});