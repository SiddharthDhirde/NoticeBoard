// Make sure that service worker are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(
        "https://siddharthdhirde.github.io/NoticeBoard/sw_cached_site.js"
      )
      .then((reg) => console.log("ServiceWorker registered successfully"))
      .catch((err) => console.log(`ServiceWorker registration failed: ${err}`));
  });
}

function fetchNoticeMessages() {
  return fetch("https://siddharthdhirde.github.io/NoticeBoard/notices.json")
    .then((response) => response.json())
    .then((data) => data.map((item) => item.message));
}

var currentIndex = 0;

function updateNoticeText() {
  fetchNoticeMessages()
    .then((messages) => {
      // Get the current notice message from the array
      var currentNotice = messages[currentIndex];

      // Update the notice text
      document.getElementById("notice-text").textContent = currentNotice;

      // Increment index for the next notice message
      currentIndex = (currentIndex + 1) % messages.length;
    })
    .catch((error) => {
      console.error("Error fetching notice messages:", error);
    });
}

// Initial call to update notice text
updateNoticeText();

// Automatically update notice text after 15 seconds
setInterval(updateNoticeText, 15000);
