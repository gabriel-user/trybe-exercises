const express = require('express');

const activitiesRouter = require('./routers/activitiesRouter');
const signUpRouter = require('./routers/signUpRouter');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signUpRouter);

module.exports = app;