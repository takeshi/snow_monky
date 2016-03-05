export {Ticket} from '../../share/ticket';

import {db} from '../db';

import EntityUtil from './entity-util';
import * as sequelize from 'sequelize';

import {Ticket} from '../../share/ticket';

import {TrackerInstance, TrackerModel} from './tracker.entity';

export interface TicketInstance extends Ticket, sequelize.Instance<Ticket> {

    setTracker(tracker: TrackerInstance): Promise<void>;
    getTracker(): Promise<TrackerInstance>;
}

export let TicketModel = EntityUtil.model<TicketInstance, Ticket>(Ticket, {
    title: sequelize.STRING,
    desc: sequelize.STRING
});

TicketModel.belongsTo(TrackerModel, {
    as: 'tracker'
});
