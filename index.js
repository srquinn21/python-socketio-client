const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');

const app    = express();
const server = http.createServer(app);
const io     = socketio(server);

const PORT = process.env.PORT || 9000;

app.get('/ping', (req, res) => {
  res.sendStatus(200);
});

io.set('transports', ['websocket']);
io.on('connection', socket => {
  socket.on('message', message => {
    console.log(message);
    socket.send(message);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
