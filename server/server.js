const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io').listen(http);
const wsRouter = require("./routes/ws-router");
const path = require('path');

app.use(express.static(path.join(__dirname + "/../", 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/../", 'dist', 'index.html'));
});

app.use('/ws', wsRouter);

http.listen(9000, () => {
  console.log("SERVER Running at port 9000");
});



io.on('connection', socket => {
  console.log('A new webscoket connection has been established');

  socket.on('join', message => {
    console.log(message);
  });

  socket.on('message', msg => { console.log(msg) });
});



setInterval(() => {
  var stockPrice = Math.floor(Math.random() * 1000);
  console.log(stockPrice);
  io.emit('stock price update', stockPrice);
  let date = new Date();
  console.log(date);
  io.emit('server time', date);
}, 1000);