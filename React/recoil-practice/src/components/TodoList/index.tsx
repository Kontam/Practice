import { useTodoList } from "./useTodoList";

const TodoList: React.FC = () => {
  const { todo } = useTodoList();
  return (
    <div>
      TodoList
      <ul>
        {todo.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
