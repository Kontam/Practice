import express, {Request, Response} from 'express';
import next from 'next';
import {INITIAL_TODOS} from './modules/initialTodos';
import {TodoController} from './todoController';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const todoController = new TodoController(INITIAL_TODOS);
  server.get('/todo', (req, res) => todoController.get(req, res));

  server.all('*', (req: Request, res: Response) => {
    return handle(req,res);
  });

  server.listen(port, () => {
    console.log(`Ready on http://localhost:${port}`);
  })
})
