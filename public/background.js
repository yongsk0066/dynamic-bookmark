/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
    console.log("Chrome extension successfully installed!");
    return;
});

// chrome.storage.sync.get(["targetBookmark"], (r) => {
//     console.log(r);
// });
