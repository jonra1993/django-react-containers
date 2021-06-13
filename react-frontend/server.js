const express = require('express');
const ws = require('ws');
const app = express();
app.disable("x-powered-by");
const path = require('path');
require('dotenv').config();


// Set up a headless websocket server that prints any
// events that come in.
const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => {
    wsServer.clients.forEach(client => client.send(message));
  })
});


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

const server = app.listen(8081, () => {
  //console.log('token server running on 8081')
});

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (_socket) => {
    wsServer.emit('connection', _socket, request);
  });
});