const validateLoginFields = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status().json({ 
      message: 'É necessário usuário e senha para fazer login', 
    });
  }

  next();
};

module.exports = validateLoginFields;