import { NextPage } from "next";

const Parent: NextPage = () => {
  const data = [
    {name: "Kontam1", id: "1"},
    {name: "Kontam2", id: "2"},
  ]
  const handleClick = () => {
    const child = window.open("/child", "c1", "width=500,height=500")
    const sc = document.createElement("script")
    sc.innerText = `var data = ${JSON.stringify(data)}`
    child.document.querySelector("body").appendChild(sc);
  }
	return (
    <div>
      <button type="button" onClick={handleClick}>Open</button>
    </div>
	)
}

export default Parent;