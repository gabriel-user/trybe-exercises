const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const properties = ['createdAt', 'rating', 'difficulty'];

  if (!description) {
    res.status(400).json({ message: 'O campo description é obrigatório' });
  }

  properties.forEach((property) => {
    if (!(property in description)) {
      return res.status(400).json({ message: `O campo ${property} é obrigatório` });
    }
  });

  next();
};

module.exports = validateDescription;