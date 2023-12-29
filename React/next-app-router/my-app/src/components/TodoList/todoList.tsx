import { Todo } from "@/app/todos/list/route";

export const TodoList = async () => {
  const res = await fetch('http://localhost:3000/todos/list')
  const data = await res.json() as Todo[];
  if (!Array.isArray) return <div>error!</div>

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <p>{todo.name}</p>
          <input type="checkbox" defaultChecked={todo.done} />
        </li>
      ))}
    </ul>
  );
};
