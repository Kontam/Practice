import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList/todoList";
import { Suspense } from "react";
import { Todo } from "./list/route";
import Loading from "./loading";

export const Todos = () => {
  const create = async (todoName: string) => {
    'use server'
    const body: Todo = {
      name: todoName,
      id: new Date().toString(),
      done: false,
    };
    console.log("server acitons", body);
    fetch("http://localhost:3000/todos/list", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return body;
  };
  return (
    <main>
      <TodoForm create={create}/>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </main>
  );
};

export default Todos;
