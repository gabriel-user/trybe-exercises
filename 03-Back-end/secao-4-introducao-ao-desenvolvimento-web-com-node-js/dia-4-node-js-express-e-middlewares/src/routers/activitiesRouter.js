const router = require('express').Router();

const validateName = require('../middlewares/validateName');

router.post('/', validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;