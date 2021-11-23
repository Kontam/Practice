function createTicket() {
  chrome.storage.local.get({
    apiKey: ""
  }, (values: any) => {
    window.alert(values.apiKey); 
  });
  window.open("https://example.com");
}

(() => {
  const createTicketButton = document.getElementById("createTicket");
  createTicketButton?.addEventListener("click", createTicket);
})();
