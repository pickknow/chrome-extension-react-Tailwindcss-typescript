// src/background.ts
// Background script logic (e.g., event listeners)
console.log("Background script running");

// Example: Listening for browser action click
chrome.action.onClicked.addListener(tab => {
  console.log("Browser action clicked for tab:", tab);
  // Perform actions here (e.g., open a new tab)
});
