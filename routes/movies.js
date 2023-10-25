const express = require('express');
const { createMovieValidation, deleteMovieValidation } = require('../utils/validation');

const router = express.Router();
const moviesController = require('../controllers/movies');

router.get('/', moviesController.getMovies);
router.post('/', createMovieValidation, moviesController.createMovie);
router.delete('/:id', deleteMovieValidation, moviesController.deleteMovie);

module.exports = router;
