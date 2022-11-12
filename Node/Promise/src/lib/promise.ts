export function Promise(fn: () => void) {
  if(!(this instanceof Promise))
    throw new TypeError(`Promises must be constructed via new`);
  if(typeof fn !== 'function') throw new TypeError('not a function');


  /*
  function handle(self, deferred) {
    while(self._state === 3) {
      self = self._value;
  }
 */

  function resolve(self, newValue) {
    try {
      if (newValue === self)
        throw new TypeError('A promise cannot be roslved with itself.');
      if (
        newValue &&
        (typeof newValue === 'object' || typeof newValue === 'function')
      ) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
        //  finale(self);
          return;
        } else if (typeof then === 'function') {
          //doResolve(bind(then, newValue), self);
          return;
        }
      }
    } catch {
      // reject(self, e);
    }
  }
}
