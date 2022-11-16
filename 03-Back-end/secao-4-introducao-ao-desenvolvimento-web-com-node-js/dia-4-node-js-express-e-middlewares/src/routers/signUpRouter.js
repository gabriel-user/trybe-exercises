const router = require('express').Router();

const tokenGenerator = require('../utils/tokenGenerator');

router.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = tokenGenerator(8);
  res.status(200).json({ token });
});

module.exports = router;