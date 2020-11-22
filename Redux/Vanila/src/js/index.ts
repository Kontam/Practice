import { myStore } from './redux/store';
import { addTodo } from './redux/modules/todos';

(function main(){
  myStore.dispatch(addTodo({
    id: '1',
    name: 'name1',
    done: false,
  }));
  console.log(myStore.getState());
})();
