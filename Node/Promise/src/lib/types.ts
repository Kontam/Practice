import { BooleanValueNode } from "graphql";

export type MyHandler = {
	onFulfilled: Function;
  onRejected: Function;
  promise: MyPromise;
}

export type MyPromise = {
	resolve: (value: any) => MyPromise;
	reject: (value: any) => MyPromise;
	_immediateFn: Function;
	_state: number;
 _handled: boolean;
 _value: any;
 _deferreds: Array<MyHandler>;
}

export type PromiseCallback = (resolve: Function, reject: Function) => void