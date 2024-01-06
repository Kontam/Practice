import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  todoList: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <main>
      <h1>todos Layout</h1>
      {props.children}
      {props.todoList}
      <a href="/todos/selected/1">move To selected</a>
    </main>
  );
};

export default Layout;
