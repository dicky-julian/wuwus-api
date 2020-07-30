const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/:id', controller.getUserByIdC);
router.put('/:id', controller.updateUserByIdC);

module.exports = router;