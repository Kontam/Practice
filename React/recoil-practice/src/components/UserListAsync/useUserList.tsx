import { atom, selector, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { UserAPIResponse } from "../UserList/useUserList";

	const fetchUsers = async (count: number) => {
		const result: UserAPIResponse = await (await fetch(`https://randomuser.me/api/?results=${count}`, { method: "GET"})).json();
		return result.results;
	}

export	const countState = atom({
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