const express = require('express');
const ApiError = require('../errors/ApiError');
const auth = require('../middlewares/auth');

const router = express.Router();
const { createUserValidation, loginValidation } = require('../utils/validation');
const { login, createUser } = require('../controllers/users');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (req, res, next) => {
  next(ApiError.notFound('Страница не существует'));
});

module.exports = router;
