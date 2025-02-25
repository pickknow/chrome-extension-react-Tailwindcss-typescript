// src/content.ts
// Content script logic (runs in the context of web pages)
console.log("Content script running");

// Example: Accessing the DOM of the current page
const title = document.title;
console.log("Page title:", title);

// Example: Sending a message to the background script
chrome.runtime.sendMessage({ message: "Hello from content script" }, response => {
  console.log("Response from background script:", response);
});
