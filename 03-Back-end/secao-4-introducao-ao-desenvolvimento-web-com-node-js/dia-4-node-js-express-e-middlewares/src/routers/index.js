const router = require('express').Router();

const activitiesRouter = require('./activitiesRouter');
const signUpRouter = require('./signUpRouter');

router.use('/signup', signUpRouter);
router.use('/activities', activitiesRouter);

module.exports = router;