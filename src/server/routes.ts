import * as express from 'express';

import * as ticket from './router/ticket.router';

export function initRoutes(app: express.Application) {

    app.use('/ticket', ticket.app);

}