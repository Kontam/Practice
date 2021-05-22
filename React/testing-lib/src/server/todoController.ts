import { Request, Response } from "express"

export type Todo = {
  id: string,
  name: string,
  done: boolean
}

export class TodoController {
  todos: Todo[];

  constructor(initialTodos: Todo[] = []) {
    this.todos = initialTodos;
    console.log(this.todos);
  };

  get(req: Request, res: Response) {
    res.send(this.todos);
    return;
  };

  post(req: Request, res: Response) {
    console.log(req.body);
  };

  patch(req: Request, res: Response) {
    console.log(req.body);
  };

  delete(req: Request, res: Response) {
    console.log(req.body);
  };
};
