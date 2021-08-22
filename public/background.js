/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
    console.log("Chrome extension successfully installed!");
    return;
});

chrome.alarms.create("updateBookmark", { periodInMinutes: 60 * 24 });

// chrome.storage.sync.get(["targetBookmark"], (r) => {
//     console.log(r);
// });
