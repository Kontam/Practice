import {addTodo} from '../redux/modules/todos';
import { myStore } from '../redux/store';

export const activate = () => {
  myStore.subscribe(() => console.log(myStore.getState())); 
  const button = document.getElementById("add");
  button?.addEventListener('click', function() {
    myStore.dispatch(addTodo({
      id: '1',
      name: 'name1',
      done: false,
    }));
  });
}
