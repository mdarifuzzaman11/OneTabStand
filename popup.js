document.getElementById('closeTabsButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({closeTabs: true}, function(response) {
      if (response && response.message) {
        document.getElementById('statusMessage').textContent = response.message;
      }
    });
  });
  
  document.getElementById('settingsIcon').addEventListener('click', function() {
    // Open settings page or handle settings logic
    // This part can be filled in based on how you wish to handle settings
  });
  