// Make sure that service worker are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register('https://siddharthdhirde.github.io/NoticeBoard/sw_cached_site.js')
      .then((reg) => console.log("ServiceWorker registered successfully"))
      .catch((err) => console.log(`ServiceWorker registration failed: ${err}`));
  });
}

// Set the localNotice in the localStorage
var localNotice = "Don't have a Good Day, Have a Great Day!";
localStorage.setItem("notice", localNotice);

// Update the content of the notice-text paragraph element
var noticeTextElement = document.getElementById("notice-text");
noticeTextElement.textContent = localNotice;
