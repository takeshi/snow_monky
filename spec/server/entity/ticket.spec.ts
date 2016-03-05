'use strict';

import {Ticket, TicketModel} from '../../../src/server/entity/ticket';

console.log('start');

describe('ticket', async () => {

    beforeEach(async (done) => {
        await TicketModel.sync({ force: true });

        await TicketModel.create(
            Ticket.of({ title: 'title', desc: 'desc' }
            ));

        done();
    });

    it('findAll', async (done) => {

        let tickets = await TicketModel.findAll();
        expect(tickets[0].validate()).toBe(true);
        expect(tickets.length).toBe(1);
        console.log(JSON.stringify(tickets));
        done();

    });

});

// describe('ticket', async () => {

//     await entity.TicketModel.sync({ force: true });

//     let ticket = await entity.TicketModel.create(entity.Ticket.of('title', 'desc'));

//     it('findAll', async () => {

//         let tickets = await entity.TicketModel.findAll();
//         console.log(tickets);
//         expect(1).actual(tickets.length);

//     });

// });