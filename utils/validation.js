const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const urlValidation = (errorMessage) => (value, helpers) => (
  !validator.isURL(value)
    ? helpers.message(errorMessage)
    : value
);

const createUserValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(urlValidation('Некорректная ссылка для поля image')),
    trailerLink: Joi.string().required().custom(urlValidation('Некорректная ссылка для поля trailerLink')),
    thumbnail: Joi.string().required().custom(urlValidation('Некорректная ссылка для поля thumbnail')),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  createUserValidation,
  loginValidation,
  updateProfileValidation,
  createMovieValidation,
  deleteMovieValidation,
};
