const redirectToHoloTools = (tab) => {
  const toolsUrl = 'https://hololive.jetri.co';
  const newTab = 'chrome://newtab/';

  const query = tab.url.split('?')[1];
  const params = new URLSearchParams(query);
  const ytVideoId = params.has('v') && params.get('v');

  ytVideoId || tab.url === newTab
    ? chrome.tabs.update(tab.id, {
      url: `${toolsUrl}/#/watch?videoId=${ytVideoId}`,
    })
    : chrome.tabs.create({
      url: toolsUrl,
    });
};

chrome.runtime.onMessage.addListener((request, sender) => {
  redirectToHoloTools(sender.tab)
});

chrome.browserAction.onClicked.addListener((tab) => {
  const toolsUrls = ['hololive.jetri.co'];
  if (toolsUrls.some(url => tab.url.includes(url))) {
    return;
  }
  redirectToHoloTools(tab);
});
