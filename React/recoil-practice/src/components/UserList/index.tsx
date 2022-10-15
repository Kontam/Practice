import { useUserList } from "./useUserList"

export function UserList() {
	const { onClick, users  } = useUserList();
	return (
		<div>
			<button  type="button" onClick={onClick}>fetch</button>
			<ul>
			{users.map(user => <li key={user.id.name}>{user.name.first}</li>)
			}
</ul>
			</div>
	)
}