import { NextPage } from "next";
import { useEffect } from "react";

const Parent: NextPage = () => {
  const data = [
    {name: "Kontam1", id: "1"},
    {name: "Kontam2", id: "2"},
  ]
  let child;
  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log("parent origin", e.origin);
      console.log("parent data", e.data);
      if(child) {
        child.postMessage(data, "*");
      }
    });
  }, []);
  const handleClick = () => {
    child = window.open("/child", "c1", "width=500,height=500")
    const sc = document.createElement("script")
    sc.innerText = `var data = ${JSON.stringify(data)}`
    child.document.querySelector("body").appendChild(sc);
    
  }
  const handleClickPost = () => {
    child.postMessage("hello there", "*");
  }
	return (
    <div>
      <button type="button" onClick={handleClick}>Open</button>
      <button type="button" onClick={handleClickPost}>Post</button>
    </div>
	)
}

export default Parent;