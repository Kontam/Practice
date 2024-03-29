import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../../../pages/users";
import { useUserList } from "./useUserList";

export function UserList(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { onPlusClick, users } = useUserList(props);
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
