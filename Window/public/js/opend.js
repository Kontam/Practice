
(function(){
  console.log(window.opener);
  window.opener.document.getElementById("place").innerHTML = "OK";

  const dataField = document.getElementById("data");
  const btn = document.getElementById("dButton");
  btn.addEventListener("click", () => {
    dataField.innerHTML = JSON.stringify(x);
  });

})();
