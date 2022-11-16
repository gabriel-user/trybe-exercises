const router = require('express').Router();

const auth = require('../middlewares/auth');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');

router.post('/',
  auth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice, 
  validateName, 
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;