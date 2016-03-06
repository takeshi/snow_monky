'use strict';

import {$it, $beforeAll} from 'async-await-jasmine';

import {Ticket, TicketModel} from '../../../src/server/entity/ticket.entity';

import {Tracker, TrackerModel} from '../../../src/server/entity/tracker.entity';

import {db} from '../../../src/server/db';

describe('ticket', () => {

    $beforeAll(async () => {

        await TrackerModel.sync({ force: true });
        await TicketModel.sync({ force: true });

        await TrackerModel.bulkCreate(Tracker.list([
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
        ));

        let trackers = await TrackerModel.findAll();

        let ticket = await TicketModel.create(
            Ticket.of(
                { title: 'title', desc: 'desc' }
            ));

        await ticket.setTracker(trackers[0]);

        let ticket2 = await TicketModel.create(
            Ticket.of(
                { title: 'title2', desc: 'desc2', trackerId: trackers[0].id }
            ));

    });

    $it('findAll', async () => {
        let tickets = await TicketModel.findAll({
            include: [{ model: TrackerModel, as: 'tracker' }]
        });
        expect(2).toBe(tickets.length);
    });

});
