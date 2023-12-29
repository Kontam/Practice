import { NextResponse } from "next/server";

export type Todo = {
	id: number,
	name: string,
	done: boolean,
};

const fixture: Todo[] = [
	{id: 1, name: "shopping", done: false},
	{id: 2, name: "cleaning", done: false},
	{id: 3, name: "study", done: false},
]


export async function GET() {
	const mockedDataFetch = (time: number) => new Promise((resolve) => {
		setTimeout(() => {
			console.log("mocked DataFetch")
			resolve(fixture)
		}, time)
	})
	return NextResponse.json(await mockedDataFetch(10000));
}