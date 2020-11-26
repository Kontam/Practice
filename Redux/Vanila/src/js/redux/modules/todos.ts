import {Reducer} from 'redux';
import {createAction} from '@reduxjs/toolkit';
import {Todo, Todos} from '../types';

const TODO = 'todo';
const ADD_TODO = `${TODO}/add`;
// const REMOVE_TODO = `${TODO}/remove`;

export const INITIAL_STATE = [];

export const addTodo = createAction<Todo>(ADD_TODO);

export const todos: Reducer<Todos> = (state, action) => {
  if (!state) state = INITIAL_STATE;
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
