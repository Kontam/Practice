import { Todo } from "@/app/todos/list/route";
import Link from "next/link";

type Props = {
  selected?: string;
};

export const TodoList = async (props: Props) => {
  console.log(process.env);
  const res = await fetch(process.env.TODO_API || "");
  const data = (await res.json()) as Todo[];
  console.log(data[0], "TodoList");
  if (!Array.isArray) return <div>error!</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <Link href={`/todos/selected/${todo.id}`}>
            {props.selected === todo.id ? (
              <strong>{todo.name}</strong>
            ) : (
              todo.name
            )}
          </Link>
          <input type="checkbox" defaultChecked={todo.done} />
        </li>
      ))}
    </ul>
  );
};
