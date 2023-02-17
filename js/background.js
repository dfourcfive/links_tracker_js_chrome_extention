let activeTabId;

chrome.tabs.onActivated.addListener(tab => {
  activeTabId = tab.tabId;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'linkClicked') {
    chrome.tabs.get(activeTabId, tab => {
      const data = {
        url: message.url,
        duration: message.duration,
        title: tab.title,
        timestamp: Date.now()
      };

      // send the data to your server or store it locally
      console.log(data);
    });
  }
});
