import { Todos } from "../../redux/types";

export const renderTodoList = (todos: Todos) => {
  const targetDOM = document.getElementById("todoList");
  if (!targetDOM) {
    console.error('targetDOM is not found');
    return;
  }
  targetDOM?.appendChild(createTodoListContainer(todos));
}

export const createTodoListContainer = (todos: Todos) => {
  const containerElement = document.createElement("div");
  const listElement = document.createElement("ul");
  
  const todoItemElements = todos.map(() => {
    const item = document.createElement("li");
    const label = document.createElement("p");
    label.textContent = "test";
    item.appendChild(label);
    return item;
  });

  todoItemElements.forEach((element) => listElement.appendChild(element));
  containerElement.appendChild(listElement);
  return containerElement;
}
