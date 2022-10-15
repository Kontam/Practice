import { atom, useRecoilState } from "recoil";

export type Todo = {
	id: string,
	name: string,
}

// TODO: https://randomuser.me/を使ってもいい

const todoState = atom({
	key: 'TodoState',
	default: [{
		id: '0001',
		name: 'first todo'
	}]
})

export function useTodoList() {
	const [todo, setTodo] = useRecoilState(todoState);

	return { todo };
}