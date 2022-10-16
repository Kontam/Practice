import { NextPage } from "next";
import React from "react";
import { UserList } from "../src/components/UserListAsync";

const Users: NextPage = () => {
	return (
		<React.Suspense fallback={<h1>fallback</h1>}>
			<UserList />
		</React.Suspense>
	)
}

export default Users;