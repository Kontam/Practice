import { NextResponse } from "next/server";

const fixture = [
	{id: 1, name: "shopping", done: false},
	{id: 2, name: "cleaning", done: false},
	{id: 3, name: "study", done: false},
]


export async function GET() {
	return NextResponse.json(fixture)
}