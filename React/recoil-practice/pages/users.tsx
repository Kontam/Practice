import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { UserList } from "../src/components/UserList";
import { UserAPIResponse } from "../src/components/UserList/useUserList";

const Users = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
			<UserList {...props}/>
	)
}

export async function getServerSideProps() {
	const result: UserAPIResponse = await (await fetch(`https://randomuser.me/api/?results=100`, { method: "GET"})).json();
	return {
		props: { data: result.results}
	}
}

export default Users;