const jwt = require('jsonwebtoken');
const ApiError = require('../errors/ApiError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const { NODE_ENV = 'production', JWT_SECRET = 'dev-secret' } = process.env;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw ApiError.unauthorized('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw ApiError.unauthorized('Некорректный токен');
  }

  req.user = payload;

  return next();
};
