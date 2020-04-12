chrome.browserAction.onClicked.addListener((tab) => {
  const toolsUrls = ['hololive.jetri.co'];
  if (toolsUrls.some(url => tab.url.includes(url))) {
    return;
  }
  const toolsUrl = 'https://hololive.jetri.co';
  const query = tab.url.split('?')[1];
  const params = new URLSearchParams(query);
  const ytVideoId = params.has('v') && params.get('v');

  ytVideoId
    ? chrome.tabs.update(tab.id, {
      url: `${toolsUrl}/#/watch?videoId=${ytVideoId}`,
    })
    : chrome.tabs.create({
      url: toolsUrl,
    });
});
