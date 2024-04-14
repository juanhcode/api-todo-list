const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection');
require('dotenv').config();
const auth = require('./routes/v1/auth.routes');
const task = require('./routes/v1/task.routes');


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/auth', auth);
app.use('/v1/task', task);

let server = app.listen(3000, async () => {
    await db.authenticate();
    console.log('Database online');
    //const port1 = server.address().port;
    console.log(`Application server running on ${3000}`);
});