const Movie = require('../models/movie');
const ApiError = require('../errors/ApiError');

module.exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({ owner: req.user._id });
    res.status(200).send(movies);
  } catch (err) {
    next(ApiError.internal('Ошибка сервера'));
  }
};

module.exports.createMovie = async (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  const owner = req.user._id;

  try {
    const movie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
      owner,
    });

    res.send(movie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(ApiError.badRequest('Ошибка валидации'));
    } else {
      next(ApiError.internal('Ошибка сервера'));
    }
  }
};

// eslint-disable-next-line consistent-return
module.exports.deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const movie = await Movie.findById(id);

    if (!movie) {
      return next(ApiError.notFound('Фильм не найден'));
    }
    if (movie.owner.toString() !== userId) {
      return next(ApiError.forbidden('Вы не можете удалить этот фильм'));
    }

    const deletedMovie = await Movie.deleteOne(movie);

    res.status(200).send({ data: deletedMovie });
  } catch (err) {
    next(ApiError.internal('Ошибка сервера'));
  }
};
