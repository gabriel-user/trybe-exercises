const router = require('express').Router();

const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');

router.post('/', 
  validateName, 
  validatePrice, 
  validateDescription,
  validateCreatedAt,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;