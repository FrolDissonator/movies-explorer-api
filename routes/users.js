const express = require('express');
const { celebrate, Joi } = require('celebrate');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/me', usersController.getCurrentUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required(),
  }),
}), usersController.updateProfile);

module.exports = router;
