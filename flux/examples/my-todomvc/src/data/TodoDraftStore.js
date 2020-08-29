import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return "";  
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.CHANGE_TODO_DRAFT:
        return action.text;
      default:
        return state;
    }
  }
}

export default new TodoDraftStore();
