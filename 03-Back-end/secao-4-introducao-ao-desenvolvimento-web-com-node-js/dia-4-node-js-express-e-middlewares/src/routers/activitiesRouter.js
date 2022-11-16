const router = require('express').Router();

const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');

router.post('/', 
  validateName, 
  validatePrice, 
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;