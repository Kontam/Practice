import { TodoForm } from "@/components/TodoForm";
import { Todo } from "./list/route";

export const Todos = () => {
  const create = async (todoName: string) => {
    "use server";
    const body: Todo = {
      name: todoName,
      id: new Date().toString(),
      done: false,
    };
    console.log("server acitons", body);
    fetch(process.env.TODO_API || "", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return body;
  };
  return (
    <>
      <TodoForm create={create} />
    </>
  );
};

export default Todos;
