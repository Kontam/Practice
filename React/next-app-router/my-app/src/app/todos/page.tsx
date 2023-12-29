import { TodoList } from "@/components/TodoList/todoList";
import { Suspense } from "react";
import { Todo } from "./list/route";
import Loading from "./loading";

export const Todos = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </main>
  );
};

export default Todos;
