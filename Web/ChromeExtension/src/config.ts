function saveConfig() {
  const apiKeyField = document.getElementById("APIKey");
  if (!apiKeyField) return console.error("form not found");
  chrome.storage.local.set({
    apiKey: (apiKeyField as HTMLInputElement).value,
  });
  window.alert("Saved!!");
}

function restoreConfig() {
  const apiKey = document.getElementById("APIKey");
  chrome.storage.local.get({
    apiKey: ""
  }, (values: any) => {
    if(!apiKey) return console.error("no form");
    (apiKey as HTMLInputElement).value = values.apiKey;
  });
  window.alert("Saved!!");

}

(() => {
  document.getElementById("save")?.addEventListener("click", saveConfig);
  document.addEventListener("DOMContentLoaded", restoreConfig);
})();
