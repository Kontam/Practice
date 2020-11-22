
export type Todo = {
  id: string;
  name: string;
  done: boolean;
};

export type Todos = Todo[];

export type RootReducer = {
  todo: Todos;
};

