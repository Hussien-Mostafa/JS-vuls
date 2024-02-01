function runUserFunction() {
    var userFunction = document.getElementById("function-name").value; // User supplied function name
    eval(userFunction + "()"); // Executing the user-supplied function name
}

// An attacker could potentially supply a malicious function name that executes unwanted code.




function delayedAlert(message, delay) {
    // Using a string as the first argument to setTimeout can lead to implied eval
    setTimeout("alert('" + message + "')", delay);
}

// This can be exploited if message is controlled by the user and includes closing quotes and other commands.



document.getElementById("submit-button").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    // Inserting user input directly into the DOM
    document.getElementById("output").innerHTML = userInput;
});

// If userInput contains malicious script tags or JavaScript, it could be executed.



const https = require('https');
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/data',
  method: 'GET',
  rejectUnauthorized: false // Disables SSL certificate validation
};

const req = https.request(options, (res) => {
  // Processing the response
});

req.end();



const dbConnect = (dbConfig) => {
    console.log(`Connecting to database with user: ${dbConfig.user} and password: ${dbConfig.password}`);
    // Code to initiate database connection
};
  // If dbConfig contains sensitive information, such as user credentials, this log is a security risk.




  function loadUserScript(username) {
    var scriptUrl = "/user-scripts/" + username + ".js";
    document.write('<script src="' + scriptUrl + '"></script>');
    // This can be dangerous if the username variable is not properly sanitized,
    // as it could lead to an XSS vulnerability.
}



const ws = new WebSocket("ws://example.com/data");

ws.onmessage = function(event) {
  console.log(`Data received: ${event.data}`);
  // Data received through an unsecured WebSocket connection could be intercepted.
};

// The ws:// URL scheme is used, which means the WebSocket connection is not encrypted.




const express = require('express');
const app = express();

app.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const userProfile = getUserProfile(userId); // Assume this fetches user profile data
  res.json(userProfile);
  // Any user can access any other user's profile data just by changing the userId in the URL.
});

function getUserProfile(userId) {
  // Database call to retrieve user profile data
}



const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*' // Allows any origin to access your API
}));

app.get('/api/data', (req, res) => {
  res.json({ secretData: 'Sensitive information' });
});

// This configuration allows any website to make requests to your API and access its data.




app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt: username = ${username}, password = ${password}`);
    // Authenticate user...
    // Logging credentials is a severe security risk, as it exposes user passwords in plain text.
  });



  function executeDynamicCode(code) {
    eval(code);
    // The eval() function is often considered harmful as it allows for execution of arbitrary code,
    // which can lead to security vulnerabilities like XSS or code injection.
  }



document.domain = "example.com";
// This allows a page at subdomain.example.com to access resources at another.subdomain.example.com
// However, it can be dangerous as it broadens the scope of domains that can interact with each other.




const crypto = require('crypto');

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
  // MD5 is considered obsolete and insecure for password hashing due to its vulnerability to collision attacks.
}




window.onload = function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', false); // Synchronous request
    xhr.send();
  
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
    // This can cause the browser to freeze or become unresponsive until the data is fully loaded.
  }




  const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});

// This exposes the AWS keys directly in the source code, which can be accessed by anyone who views the code.