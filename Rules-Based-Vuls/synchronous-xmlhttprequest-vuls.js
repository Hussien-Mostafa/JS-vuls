
//Scenario 1: Loading Data Synchronously in Page Load
window.onload = function() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', false); // Synchronous request
  xhr.send();

  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
  // This can cause the browser to freeze or become unresponsive until the data is fully loaded.
}



//Scenario 2: Synchronous Request in Event Handlers
document.getElementById('load-button').addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', false); // Synchronous request
  xhr.send();

  // This will block the UI until the request completes, leading to a poor user experience.
});



//Scenario 3: Fetching Configuration Synchronously
function getConfig() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/config', false); // Synchronous request
  xhr.send();

  return xhr.responseText;
  // Fetching configuration data synchronously can delay the initialization of the application.
}


//Scenario 4: Synchronous Request in a Loop
for (let id of userIds) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.example.com/user/${id}`, false); // Synchronous request
  xhr.send();
  // Synchronous requests inside a loop can lead to significant performance issues.
}

//Scenario 5: Synchronous AJAX in Form Submission
document.getElementById('myForm').onsubmit = function() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.example.com/submit', false); // Synchronous request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(new FormData(this));

  // The browser will be unresponsive until the request completes.
  return false;
};