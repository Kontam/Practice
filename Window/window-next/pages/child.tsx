import { NextPage } from "next";

const Child: NextPage = () => {
  const handleClick = () => {
    window.open("/child", "c1", "width=500,height=500")
  }
	return (
    <div>
	    <h1>Child</h1>
      <button type="button" onClick={handleClick}>Open</button>
    </div>
	)
}

export default Child;