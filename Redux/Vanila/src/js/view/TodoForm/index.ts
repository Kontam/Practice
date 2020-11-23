import {Dispatch} from "redux";
import {addTodo} from "../../redux/modules/todos";

export const hydrateTodoForm = (dispatch: Dispatch) => {
  const targetDOM = document.getElementById('todoForm'); 
  targetDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameElem: HTMLInputElement = targetDOM.querySelector('[name="name"]');
    const todoName = nameElem.value;
    dispatch(addTodo({
      id: '1',
      name: todoName,
      done: false,
    }));
    console.log('submit', event); 
  })
  console.log('hydete', targetDOM);
}
