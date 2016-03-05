'use strict';

import {asyncBeforeEach, asyncIt} from './spec-util';

import {Ticket, TicketModel} from '../../../src/server/entity/ticket.entity';

import {Tracker, TrackerModel} from '../../../src/server/entity/tracker.entity';

import {db} from '../../../src/server/db';


describe('ticket', async () => {

    asyncBeforeEach(async () => {

        await TrackerModel.sync({ force: true });
        await TicketModel.sync({ force: true });

        let list = Tracker.list([
            {
                name: '障害'
            },
            {
                name: 'Q&A'
            },
            {
                name: 'テーマ'
            },
            {
                name: 'タスクÏ'
            }
        ]
        );
        console.log('--------');
        await TrackerModel.bulkCreate(list);
        let trackers = await TrackerModel.findAll();

        let ticket = await TicketModel.create(
            Ticket.of(
                { title: 'title', desc: 'desc' }
            ));

        await ticket.setTracker(trackers[0]);

        console.log(JSON.stringify(trackers));

        let ticket2 = await TicketModel.create(
            Ticket.of(
                { title: 'title2', desc: 'desc2', trackerId: trackers[0].id }
            ));

        console.log('-----------');
        // done();

    });

    asyncIt('findAll', async () => {
        try {
            let tickets = await TicketModel.findAll({
                include: [{ model: TrackerModel, as: 'tracker' }]
            });

            // console.log(tickets[0]);

            expect(2).toBe(tickets.length);
            console.log(JSON.stringify(tickets));
        } catch (e) {
            fail(e);
        }
    });

    asyncIt('sample', async () => {
        // throw new Error('sample');
    });

});
