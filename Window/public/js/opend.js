
(function(){
  console.log(window.opener);
  window.opener.document.getElementById("place").innerHTML = "OK";
})();
