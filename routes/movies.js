const express = require('express');
const { celebrate, Joi } = require('celebrate');

const router = express.Router();
const moviesController = require('../controllers/movies');

router.get('/', moviesController.getMovies);
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), moviesController.createMovie);
router.delete('/:id', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
}), moviesController.deleteMovie);

module.exports = router;
