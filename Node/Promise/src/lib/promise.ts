import { MyHandler, MyPromise, PromiseCallback } from "./types";

export function Promise(fn: PromiseCallback) {
  if(!(this instanceof Promise))
    throw new TypeError(`Promises must be constructed via new`);
  if(typeof fn !== 'function') throw new TypeError('not a function');

  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
  /*
  function handle(self, deferred) {
    while(self._state === 3) {
      self = self._value;
  }
 */
}

function resolve(self, newValue) {
  try {
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
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
        // doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch {
    // reject(self, e);
  }
}

function doResolve(fn: PromiseCallback, self: MyPromise) {
  var done = false;

  try {
    fn(function(value: any) {
      if (done) return;
      done = true;
      resolve(self, value);
    },
    function(reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    }
    )
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

function reject(self: MyPromise, reason: any) {
  console.log("reject", reason);
}

function handle(self: MyPromise, deferred: MyHandler) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }

  self._handled = true;

  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    console.log("cb", cb)
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function finale(self: MyPromise) {
  if (self._state === 2 && self._deferreds.length == 0) {
    Promise._immediateFn(function() {
      if(!self._handled) {
        // Promise._unhandledRejectionFn(self._value)
      }
    });
    for (var i = 0,len = self._deferreds.length; i<len; i++){
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }
}

function Handler(onFulfilled: Function, onRejected: Function, promise: typeof Promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}  

// TODO: 最低限, Promiseをnewしてthenを書いて解決するところを目指す
Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(() => {});

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
}

Promise._immediateFn = (typeof setImmediate === 'function' && function(fn) { setImmediate(fn)} || function(fn) { setTimeout(fn, 0)})
