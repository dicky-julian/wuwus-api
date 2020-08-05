const express = require('express');
const router = express.Router();
const controller = require('../controllers/roomController');

router.get('/user/:id', controller.getRoomByUserC);
router.post('/friend', controller.addFriendRoomC);
router.put('/:id', controller.updateRoomByIdC);

module.exports = router;