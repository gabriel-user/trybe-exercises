const router = require('express').Router();

const tokenGenerator = require('../utils/tokenGenerator');

router.post('/', (_req, res) => {
  const token = tokenGenerator(8);
  res.status(200).json({ token });
});

module.exports = router;