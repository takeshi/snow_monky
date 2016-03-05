/// <reference path="deps" />
import * as express from 'express';

let app = express();


app.use(express.static('./public'));

app.listen(3000, () => {
    console.log('start http://localhost:3000');
});