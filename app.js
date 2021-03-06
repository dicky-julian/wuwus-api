require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require('./src/helpers/mysql');
const routes = require('./src/routes');

io.on('connection', socket => {
    console.log('user connected');
    socket.on('disconnect', () => console.log('user disconnect'));
    // socket.disconnect();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.io = io;
    next();
})
app.use(cors());
app.use('/', routes);

db.connect((err) => {
    if (err) return err;
    console.log('Database has Connected');
});

server.listen(process.env.PORT_APP, function() {
    console.log(`Library App runnig port ${process.env.PORT_APP}`);
});