import {Reducer} from 'redux';
import {Todo, Todos} from '../types';

const TODO = 'todo';
const ADD_TODO = `${TODO}/add`;
// const REMOVE_TODO = `${TODO}/remove`;

export const INITIAL_STATE = [];

export const addTodo = (todo: Todo) => ({type: ADD_TODO, payload: todo});

export const todos: Reducer<Todos> = (state, action) => {
  if (!state) state = INITIAL_STATE;
  switch (action.type) {
    case ADD_TODO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
