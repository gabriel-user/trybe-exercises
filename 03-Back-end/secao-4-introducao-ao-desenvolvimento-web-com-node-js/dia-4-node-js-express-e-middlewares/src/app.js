const express = require('express');
const router = require('./routers/activitiesRouter');

const app = express();

app.use(express.json());

app.use('/activities', router);

module.exports = app;