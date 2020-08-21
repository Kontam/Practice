import { of, queueScheduler, from, Observable, Subject } from 'rxjs';
import { first, map, mapTo, mergeMap, flatMap, subscribeOn, observeOn } from 'rxjs/operators';
import { fetchUser } from './lib/fetchUser';

const obs: Observable<number> = new Observable( //Observable
  subscriber => { 
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  }
);

const subscription = obs.pipe( // Operator
  map((x: any) => 2 * x),
  flatMap(() => fetchUser("a")),
  first(),
).subscribe(
  { // Observer
    next: x => console.log("pipe",x),
    error: x => console.error("error"),
    complete: () => console.log("complete")
  }
);

