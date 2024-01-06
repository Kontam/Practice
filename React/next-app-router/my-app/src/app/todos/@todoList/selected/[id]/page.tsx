import { TodoList } from "@/components/TodoList/todoList";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  params: { id: string };
};

export const Auth = (props: Props) => {
  return (
    <>
      <TodoList selected={props.params.id} />
      <Link href="/todos">Back to Todos</Link>
    </>
  );
};

export default Auth;
