'use client'
import { Todo } from "@/app/todos/list/route";
import { useState } from "react";

export type Props = {
  create: (todoName: string) => Promise<Todo>;
};

export const TodoForm = (props: Props) => {
  const [todoName, setTodoName] = useState<string>("");
  return (
    <form
      action={async () => {
        await props.create(todoName);
      }}
    >
      <label>
        <input
          type="text"
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
				<button type="submit">送信</button>
      </label>
    </form>
  );
};
