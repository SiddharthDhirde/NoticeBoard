// Make sure that service worker are supported

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_pages.js")
      .then(reg => console.log("ServiceWorker Registered Successfully"))
      .catch(err => console.log("ServiceWorker registration failed: ", err));
  });
}

// // Set the localNotice in the localStorage
// var localNotice = "Dont have a Good Day, Have a Great Day!";
// localStorage.setItem("notice", localNotice);

// // Update the content of the notice-text paragraph element
// var noticeTextElement = document.getElementById("notice-text");
// noticeTextElement.textContent = localNotice;
