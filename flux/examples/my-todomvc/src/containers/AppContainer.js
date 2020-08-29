import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';
import DraftTodoStore from '../data/TodoDraftStore';
import TodoActions from '../data/TodoActions';

function getStores() {
  return [
    TodoStore,
    DraftTodoStore,
  ];
}

// ここで返された値がpropsになる？
function getState() {
  return {
    todos: TodoStore.getState(),
    draft: DraftTodoStore.getState(),
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onChangeDraft: TodoActions.changeDraftTodo,
    onAddTodo: TodoActions.addTodo,
  };
}

export default Container.createFunctional(AppView, getStores, getState)
