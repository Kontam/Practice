import { NextPage } from "next";

declare const data: any;

const Child: NextPage = () => {
  const handleClick = () => {
    console.log(data);
  };
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
