const express = require('express');
const path = require('path');
const wsRouter = require("./routers/ws-router");
const app = express();

app.use(express.static(path.join(__dirname + "/../", 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/../", 'dist', 'index.html'));
});

app.use('/ws', wsRouter);

app.listen(9000, () => {
  console.log("SERVER Running at port 9000");
});