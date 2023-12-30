import { NextResponse } from "next/server";

export type Todo = {
	id: string,
	name: string,
	done: boolean,
};

const fixture: Todo[] = [
	{id: "1", name: "shopping", done: false},
	{id: "2", name: "cleaning", done: false},
	{id: "3", name: "study", done: false},
]

const store = {
	data: fixture,
	set: function(todo: Todo) {
		this.data.push(todo);
		return todo;
	}
}


export async function GET() {
	const mockedDataFetch = (time: number) => new Promise((resolve) => {
		setTimeout(() => {
			console.log("mocked DataFetch")
			resolve(store.data)
		}, time)
	})
	return NextResponse.json(await mockedDataFetch(5000));
}

export async function POST(data: Todo) {
	const mockedDataPost = (time: number) => new Promise((resolve) => {
		setTimeout(() => {
			console.log("mocked DataPost")
			resolve(store.set(data))
		}, time)
	})
	return NextResponse.json(await mockedDataPost(5000));
}