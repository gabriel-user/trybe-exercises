const Joi = require('joi');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const secret = process.env.JWT_SECRET || 'VamosVerSeFunciona';

const validateBody = (body) => {
  const bodySchema = Joi.object({
    username: Joi.string().min(5).alphanum().required()
      .messages({
      'string.min': '"username" length most be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  });

  return bodySchema.validate(body);
};

const validateAdmin = (username, password) => {
  if (username === 'admin' && password === 's3nh4S3gur4???') return true;
};

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    const { error } = validateBody(req.body);
    if (error) return next(error);

    const admin = validateAdmin(username, password);

    const payload = { data: { username, admin } };

    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

module.exports = login;