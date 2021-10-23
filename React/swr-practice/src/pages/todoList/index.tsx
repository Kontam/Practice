import React from 'react';
import Navigation from '../../components/Navigation';
import TodoForm from '../../components/TodoForm';

export const TodoList: React.FC = () => {
  return (
    <div>
      <Navigation />
      <TodoForm />
    </div>
  );
};

export default TodoList;
