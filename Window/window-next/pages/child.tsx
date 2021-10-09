import { NextPage } from "next";
import { useEffect, useState } from "react";

declare const data: any;

const Child: NextPage = () => {
  const [users, setUsers] = useState([]);
  const handleClick = () => {
    console.log(data);
  };
  useEffect(() => {
    window.opener.postMessage("I am child");
    window.addEventListener("message", (e) => {
      console.log("origin", e.origin);
      console.log("data", e.data);
      setUsers(e.data);
    });
  }, []);
  return (
    <div>
      <h1>Child</h1>
      <button type="button" onClick={handleClick}>
        show data
      </button>
      <ul>
        {users.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
