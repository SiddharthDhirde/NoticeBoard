// Set the localNotice in the localStorage
var localNotice = "This is a Local notice from the server!";
localStorage.setItem('notice', localNotice);

// Update the content of the notice-text paragraph element
var noticeTextElement = document.getElementById('notice-text');
noticeTextElement.textContent = localNotice;
