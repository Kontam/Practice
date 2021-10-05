
(function() {
  const button = document.getElementById("test");
  if (!button) return console.error("no button");

  const appedButton = document.getElementById("append");
  if (!appedButton) return console.error("no appedButton");

  let child;
  button.addEventListener("click", () => {
    child = window.open("../html/second.html", "testName", "width=400, height=400");
  })
  
  appedButton.addEventListener("click", () => {
    child.document.getElementById("head").innerHTML = "from parent";
  })


})()
