const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/login', controller.loginC);
router.post('/register', controller.registerC);

module.exports = router;