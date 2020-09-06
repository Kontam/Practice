import next from 'next';
import express from 'express';
import http from 'http';
import { Connection } from './modules/connecter.js';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  console.log("express", typeof server);
  const htServer = http.createServer(server);
  const connector = new Connection(htServer);
  connector.connect();

  server.get('/test', (req, res) => {
   res.send('hello!!');
  })

  server.get('*', (req, res) => {
    handle(req, res);
  })

  htServer.listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})

