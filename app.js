var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use('/static', express.static('public'));
server.listen(3030);

app.get('/', function(req,res) {
  res.sendFile("index.html", { root: __dirname + "/public" });
});

io.on('connection', function(socket) {
  console.log('connected');
  socket.on('char added', function(char) {
      socket.broadcast.emit("newChar", char);
  });
})

