import { createStore } from 'redux';
import { testFunc } from './util';

(function main(){
  const store = createStore(() => {});
  console.log(store);
  testFunc();
})();
