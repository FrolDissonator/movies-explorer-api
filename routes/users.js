const express = require('express');
const { updateProfileValidation } = require('../utils/validation');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/me', usersController.getCurrentUser);
router.patch('/me', updateProfileValidation, usersController.updateProfile);

module.exports = router;
