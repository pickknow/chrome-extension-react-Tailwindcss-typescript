
export function isOptionsPageOpen(callback: (isOpen: boolean) => void) {
  chrome.tabs.query({ url: chrome.runtime.getURL("options.html") }, function (tabs) {
    callback(tabs && tabs.length > 0);
  });
}
export const handleOpenOptions = () => {
  const optionsUrl = chrome.runtime.getURL("options.html"); // Correct path
  chrome.tabs.create({ url: optionsUrl });
}

export  const handleGoToOptions = () => {
  chrome.tabs.query({ url: chrome.runtime.getURL("options.html") }, function (tabs) {
    if (tabs && tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, { active: true });
    } else {
      handleOpenOptions();
    }
  });
}
