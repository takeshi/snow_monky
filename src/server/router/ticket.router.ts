import * as express from 'express';

import {Ticket, TicketModel} from '../entity/ticket.entity';
import {db} from '../db';

export let app = express();

app.get('/', async (req, res) => {

    db.transaction(async (t) => {

        let tickets = await TicketModel.findAll({
            limit: 10
        });
        res.json(tickets);

    });

});