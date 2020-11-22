import { Todos } from "../../redux/types";

export const renderTodoList = (todos: Todos) => {
  const targetDOM = document.getElementById("todoList");
  const currentList = document.querySelector('[data-js="List"]');
  if (currentList) {
    targetDOM.removeChild(currentList);
  }
  if (!targetDOM) {
    console.error('targetDOM is not found');
    return;
  }
  targetDOM?.appendChild(createTodoListContainer(todos));
}

export const createTodoListContainer = (todos: Todos) => {
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
  return containerElement;
}
