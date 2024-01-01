chrome.commands.onCommand.addListener(function(command) {
    if (command === "close-tabs") {
      closeAllTabsExceptCurrent();
    }
  });
  
  function closeAllTabsExceptCurrent() {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      chrome.tabs.query({active: true, currentWindow: true}, function(currentTabs) {
        const currentTabId = currentTabs[0].id;
        tabs.forEach(tab => {
          if (tab.id !== currentTabId) {
            chrome.tabs.remove(tab.id);
          }
        });
      });
    });
  }
  
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.closeTabs) {
        closeAllTabsExceptCurrent();
        sendResponse({message: "Tabs closed successfully"});
      }
      return true; // Indicates that you wish to send a response asynchronously
  });
  