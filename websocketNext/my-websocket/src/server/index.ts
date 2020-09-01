import next from 'next';
import express from 'express';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

   server.get('/test', (req, res) => {
    res.send('hello!!');
   })

  server.get('*', (req, res) => {
    handle(req, res);
  })

  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})
