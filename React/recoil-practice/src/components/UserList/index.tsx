import { useUserList } from "./useUserList";

export function UserList() {
  const { onPlusClick, users } = useUserList();
  return (
    <div>
      <button type="button" onClick={onPlusClick}>
        +
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id.name}>{user.name.first}</li>
        ))}
      </ul>
    </div>
  );
}
