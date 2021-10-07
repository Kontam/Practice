import { NextPage } from "next";
import { useEffect } from "react";

declare const data: any;

const Child: NextPage = () => {
  const handleClick = () => {
    console.log(data);
  };
  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log("origin", e.origin);
      console.log("data", e.data);
    });
  }, []);
  return (
    <div>
      <h1>Child</h1>
      <button type="button" onClick={handleClick}>
        show data
      </button>
    </div>
  );
};

export default Child;
