const addBtn = document.getElementById("addBtn")
const viewBtn = document.getElementById("viewBtn")

addBtn.addEventListener("click", async () => {
  chrome.tabs.getSelected(null, function (tab) {
    chrome.storage.sync.get("tabs", ({ tabs }) => {
      console.log("get tabs", tabs)
      if (tabs) {
        const tabList = [...tabs]
        tabList.unshift(tab)
        chrome.storage.sync.set({ "tabs": tabList });
      } else {
        chrome.storage.sync.set({ "tabs": [tab] });
      }
    });
  });
});

viewBtn.addEventListener("click", async () => {
  window.open(chrome.extension.getURL('list.html'));
});