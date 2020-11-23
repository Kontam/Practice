import { Todos } from "../../redux/types";

export const renderTodoList = (todos: Todos) => {
  const targetDOM = document.getElementById("todoList");
  const currentList = document.querySelector('[data-js="List"]');
  if (currentList) {
    targetDOM?.removeChild(currentList);
  }
  if (!targetDOM) {
    console.error('targetDOM is not found');
    return;
  }
  targetDOM?.appendChild(createTodoListContainer(todos));
}

export const createTodoListContainer = (todos: Todos) => {
  const containerElement = document.createElement("todo-list");
  containerElement.setAttribute('todos', JSON.stringify(todos));
  console.log('todos', JSON.stringify(todos));
  return containerElement;
}

export class TodoListContainer extends HTMLElement {
  constructor() {
    super();
    const todosString = this.getAttribute('todos');
    const todos: Todos = todosString ? JSON.parse(todosString) : [];
//    console.log('parsed', todos, this, todosString);
    console.log('attr', this.getAttributeNames());
    
    const shadow = this.attachShadow({mode: 'open'});
    const containerElement = document.createElement("div");
    containerElement.setAttribute('data-js', 'List');
    const listElement = document.createElement("ul");
    
    const todoItemElements = todos.map((todo) => {
      const item = document.createElement("li");
      const label = document.createElement("p");
      label.textContent = todo.name;
      item.appendChild(label);
      return item;
    });

    todoItemElements.forEach((element) => listElement.appendChild(element));
    containerElement.appendChild(listElement);

    shadow.appendChild(containerElement);
  }
}
