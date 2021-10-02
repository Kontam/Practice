
(function() {
  const button = document.getElementById("test");
  if (!button) return console.error("no button");

  button.addEventListener("click", () => {
    window.open("../html/second.html", "testName", "width=400, height=400");
  })

})()
