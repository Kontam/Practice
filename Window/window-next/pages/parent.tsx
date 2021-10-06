import { NextPage } from "next";

const Parent: NextPage = () => {
  const handleClick = () => {
    window.open("/child", "c1", "width=500,height=500")
  }
	return (
    <div>
      <button type="button" onClick={handleClick}>Open</button>
    </div>
	)
}

export default Parent;