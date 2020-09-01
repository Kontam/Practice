import next from 'next';
import express from 'express';
import http from 'http';
import socket from 'socket.io'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  const htServer = http.createServer(server);

   server.get('/test', (req, res) => {
    res.send('hello!!');
   })

  server.get('*', (req, res) => {
    handle(req, res);
  })

  const io = socket(htServer);
  io.on('connection', (socket) => {
    console.log('a user connected');
  });

  htServer.listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})
