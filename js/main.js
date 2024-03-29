// Make sure that service worker are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register('https://siddharthdhirde.github.io/NoticeBoard/sw_cached_site.js')
      .then((reg) => console.log("ServiceWorker registered successfully"))
      .catch((err) => console.log(`ServiceWorker registration failed: ${err}`));
  });
}


// Define array for notice messages
var noticeMessages = [
  'Don\'t have a Good Day, Have a Great Day!',
  '"All I ask is that TODAY, YOU do the BEST WORK of your entire life" - Steve Jobs',
  '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution." - Albert Einstein',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration." - Nikola Tesla',
  '"The only way to get started is to quit talking and begin doing." - Walt Disney',
  '"The best way to predict the future is to create it." - Peter Drucker',
  '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
  '"The true sign of intelligence is not knowledge but imagination." - Albert Einstein',
  '"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence." - Nikola Tesla',
  '"The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it." - Jordan Belfort',
  

];

// Initialize index to track current notice message
var currentIndex = 0;

// Function to update notice text
function updateNoticeText() {
  // Get the current notice message from the array
  var currentNotice = noticeMessages[currentIndex];

  // Update the notice text
  document.getElementById("notice-text").textContent = currentNotice;

  // Increment index for the next notice message
  currentIndex = (currentIndex + 1) % noticeMessages.length;
}

// Initial call to update notice text
updateNoticeText();

// Automatically update notice text after 15 seconds
setInterval(updateNoticeText, 15000);
