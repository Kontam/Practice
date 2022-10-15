import { selector, useRecoilValue } from "recoil";

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

	const fetchUsers = async () => {
		const result: UserAPIResponse = await (await fetch("https://randomuser.me/api/?results=10", { method: "GET"})).json();
		return result.results;
	}

	const usersQuery = selector({
		key: "Users",
		get: async ({get}) => {
			return await fetchUsers()
		}
	})

export function useUserList() {
	const users = useRecoilValue(usersQuery);
	return {onClick: fetchUsers, users }
}