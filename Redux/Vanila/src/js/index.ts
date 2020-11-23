import { myStore } from './redux/store';
import {renderTodoList, TodoListContainer} from './view/TodoList';
import {hydrateTodoForm} from './view/TodoForm';


(function main(){
  customElements.define('todo-list', TodoListContainer);
  myStore.subscribe(() => {
    const { todos } = myStore.getState();
    renderTodoList(todos);
  })
  hydrateTodoForm(myStore.dispatch);
})();
