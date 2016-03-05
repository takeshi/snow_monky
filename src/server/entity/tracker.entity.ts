import * as sequelize from 'sequelize';

import EntityUtil from './entity-util';

import {Tracker} from '../../share/tracker';
export {Tracker} from '../../share/tracker';

export interface TrackerInstance extends Tracker, sequelize.Instance<Tracker> {

}

export let TrackerModel = EntityUtil.model<TrackerInstance, Tracker>(Tracker, {
    name: sequelize.STRING
});
