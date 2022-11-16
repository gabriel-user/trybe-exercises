const router = require('express').Router();

const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');

router.post('/', validateName, validatePrice, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;