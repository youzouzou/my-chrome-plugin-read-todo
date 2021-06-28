const list = document.getElementById("list")
renderTabList()
function renderTabList() {
    chrome.storage.sync.get("tabs", ({ tabs }) => {
        console.log("tab list", tabs)
        list.innerHTML = ""
        if (tabs) {
            let htmlStr = ""
            for (let i = 0; i < tabs.length; i++) {
                htmlStr += "<div>" + (i + 1) + "、<a href='" + tabs[i].url + "'>" + tabs[i].title + "</a><span id='delete_" + i + "'>删除</span></span></a></div>"
            }
            list.innerHTML = htmlStr
            for (let i = 0; i < tabs.length; i++) {
                const delBtn = document.getElementById("delete_" + i)
                if (delBtn) {
                    delBtn.addEventListener("click", function () {
                        tabs.splice(i, 1)
                        chrome.storage.sync.set({ "tabs": tabs });
                        renderTabList()
                    })
                }
            }
        }
    });
}