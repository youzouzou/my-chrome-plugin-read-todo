const addBtn = document.getElementById("addBtn")
const viewBtn = document.getElementById("viewBtn")
let isAdding = false; // 防止多次重复添加
/**
 * 如果已在列表中，则不展示添加按钮
 */
chrome.tabs.getSelected(null, function (tab) {
  chrome.storage.sync.get("tabs", ({ tabs }) => {
    console.log("get tabs", tabs)
    if (tabs) {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].url === tab.url) {
          addBtn.style.display = "none"
        }
      }
    }
  });
});

addBtn.addEventListener("click", async () => {
  if (isAdding) return;
  isAdding = true
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
      addBtn.innerText = "已添加√"
      setTimeout(() => {
        addBtn.style.display = "none"
      }, 1500)
    });
  });
});

viewBtn.addEventListener("click", async () => {
  window.open(chrome.extension.getURL('list.html'));
});