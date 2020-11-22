import { createStore } from 'redux';
import { testFunc } from './util';


(function main(){
  testFunc();
  const a = createStore((s, _) => s);
  console.log(a);
})();
