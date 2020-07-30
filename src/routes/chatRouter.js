const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatController');

router.get('/room/:id', controller.getChatByRoomC);
router.post('/', controller.addChatC);

module.exports = router;