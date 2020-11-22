import { createStore } from 'redux';
import { reducer } from './modules/reducer';

export const myStore = createStore(reducer);
