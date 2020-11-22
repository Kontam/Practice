import { myStore } from './redux/store';
import {renderTodoList} from './view/TodoList';
import {hydrateTodoForm} from './view/TodoForm';

(function main(){
  myStore.subscribe(() => {
    const { todos } = myStore.getState();
    renderTodoList(todos);
  })
  hydrateTodoForm(myStore.dispatch);
})();
