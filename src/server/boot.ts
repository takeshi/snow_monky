require('zone.js');

/// <reference path="deps" />
import * as express from 'express';
import {initRoutes} from './routes';


let app = express();


app.use(express.static('./public'));
app.use(express.static('./node_modules'));
app.use('/src', express.static('./build/client/src'));
app.use('/src', express.static('./src'));

initRoutes(app);

app.listen(3000, () => {
    console.log('start http://localhost:3000');
});