import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList/todoList";
import Link from "next/link";
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
    fetch(process.env.TODO_API || "", {
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
      <a href="/todos/selected/1">move To selected</a>
    </main>
  );
};

export default Todos;
