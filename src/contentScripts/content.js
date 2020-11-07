chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? `from a content script: ${sender.tab.url}` : 'from the extension');
  const target = document.getElementById('email');
  target.value = 'hello world';

  const event = document.createEvent('HTMLEvents');
  event.initEvent('input', true, true);
  target.dispatchEvent(event);
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
});
