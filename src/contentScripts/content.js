chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? `from a content script: ${sender.tab.url}` : 'from the extension');
  console.log(document.getElementById('email'));
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
});
