const ApiError = require('../errors/ApiError');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({ message: err.message });
  }
  return res.status(ApiError.internal).send({ message: 'Ошибка сервера' });
};

module.exports = errorHandler;
