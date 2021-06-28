let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
  console.log(111)
});

// 创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane("Images", function (sidebar) {
  sidebar.setPage('./sidebar.html'); // 指定加载某个页面
  // sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
  //sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象
});
