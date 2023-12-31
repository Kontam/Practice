import { Todo } from "@/app/todos/list/route";

export const TodoList = async () => {
  console.log(process.env)
  const res = await fetch(process.env.TODO_API || "")
  const data = await res.json() as Todo[];
  console.log(data[0], "TodoList");
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
