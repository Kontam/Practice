import { Promise } from "./lib/promise";

const x = new Promise((resolve) => {
	setTimeout(() => {resolve(1);}, 1000)
});

x.then((result) => {
	console.log("then", result);
})
