const express = require('express');
const router = express.Router();

const authRouter = require('./authRouter');
const chatRouter = require('./chatRouter');
const roomRouter = require('./roomRouter');
const userRouter = require('./userRouter');

router.use('/', authRouter);
router.use('/chat', chatRouter);
router.use('/room', roomRouter);
router.use('/user', userRouter);
router.use('/images', express.static(`${__dirname}./../public/images`));

module.exports = router;