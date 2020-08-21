import { of, queueScheduler, from, Observable, Subject } from 'rxjs';
import { first, map, mapTo, mergeMap, flatMap, subscribeOn, observeOn } from 'rxjs/operators';

const actionSubject$ = new Subject();
const action$ = actionSubject$.asObservable().pipe();
const epic$ = new Subject();

const result$ = epic$.pipe(
  map(() => {
    const $output = epic(action$)
    console.log("map", $output);
    return $output;
  }),
  mergeMap((output$) => from(output$).pipe(
  )),
);


const epic = ($action: any) => {
  return $action.pipe(
    mergeMap((x: any) => {
      return of(
        { type: "HELLO", paylaod: 1 },
        { type: "HELLO2", paylaod: 2 }
      ) 
    }),
  ) 
}

result$.subscribe((x: any) => {
  console.log("result subscribe", x);
})

action$.subscribe((x) => {
  console.log("action$", x);
})
epic$.next(epic);

actionSubject$.next("fire");
