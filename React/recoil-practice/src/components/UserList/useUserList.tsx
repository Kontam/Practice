import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getServerSideProps } from "../../../pages/users";
import { countState } from "../UserListAsync/useUserList";

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


	export const usersState = atom<User[]>({
		key: "UsersGSSP",
		default: [],
	})

	export const usersSelector = selector({
		key: "CountedUsers",
		get: ({get}) => {
			const count = get(countState);
			return get(usersState).slice(0,count);
		}
	})


export function useUserList(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [ allUsers, setAllUsers ] = useRecoilState(usersState);
	useEffect(() => {
		setAllUsers(props.data);
	})
	const users = useRecoilValue(usersSelector);
	const [count, setCount] = useRecoilState(countState);
	return {onPlusClick: () => setCount((oldCount) => oldCount + 1), users }
}