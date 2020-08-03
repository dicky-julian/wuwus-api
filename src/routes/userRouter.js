const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { upload } = require('../helpers');

router.get('/:id', controller.getUserByIdC);
router.put('/:id', upload, controller.updateUserByIdC);

module.exports = router;