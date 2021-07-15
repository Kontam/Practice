import axios from 'axios';
import React, { useEffect, useState } from 'react';

export type Todo = {
  id: string;
  name: string;
};

const ChartList: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  useEffect(() => {
    axios.get<Todo[]>('/api/todo').then((result) => {
      setTodo(result.data);
    });
  }, []);

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartList;
