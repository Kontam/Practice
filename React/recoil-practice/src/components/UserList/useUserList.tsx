import { atom, selector, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

export type UserAPIResponse = {
	info: any
	results: User[];
}

export type User = {
	gender: string,
	name: {
			title: string,
			first: string,
			last: string
	},
	email: string,
	phone: string,
	cell: string,
	id: {
			name: string,
			value: string
	},
	picture: {
			large: string,
			medium: string,
			thumbnail: string
	},
}

	const fetchUsers = async (count: number) => {
		const result: UserAPIResponse = await (await fetch(`https://randomuser.me/api/?results=${count}`, { method: "GET"})).json();
		return result.results;
	}

	const countState = atom({
		key: "UserCount",
		default: 0,
	})

	const usersQuery = selector({
		key: "Users",
		get: async ({get}) => {
			return await fetchUsers(get(countState))
		}
	})

export function useUserList() {
	const users = useRecoilValue(usersQuery);
	const [count, setCount] = useRecoilState(countState);
	return {onPlusClick: () => setCount((oldCount) => oldCount + 1), users }
}