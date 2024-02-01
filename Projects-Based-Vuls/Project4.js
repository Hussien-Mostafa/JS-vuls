function parseJSON(jsonString) {
    var data = eval("(" + jsonString + ")");
    return data;
}

// Using eval to parse JSON is unsafe if jsonString is controlled by the user.
// It should be replaced with JSON.parse().



function updateUserInterface(elementId, value) {
    // Template literals with a string argument in setTimeout can be as risky as eval if value is not sanitized
    setTimeout(`document.getElementById('${elementId}').innerText = '${value}'`, 1000);
}

// This is dangerous as it can execute arbitrary code if value includes JavaScript code snippets.


socket.on('chat message', function(msg) {
    var messageElement = document.createElement('div');
    // Directly inserting message content into the DOM
    messageElement.innerHTML = msg;
    document.getElementById('messages').appendChild(messageElement);
});

// If 'msg' includes malicious JavaScript, it would be executed when the message is displayed.



process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Setting the environment variable to disable SSL validation

const request = require('request');

request.get('https://example.com', (error, response, body) => {
  // Response handling
});




app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`User login attempt: username: ${username}, password: ${password}`);
    
    // Authentication logic...
    
    // Passwords should never be logged, as they are sensitive data.
  });



  function loadExternalContent(url) {
    fetch(url).then(response => response.text()).then(data => {
        document.write(data);
        // Overwriting the entire document with fetched content can be insecure,
        // especially if the content comes from an untrusted source.
    });
}





let ws;
function setupWebSocket() {
  ws = new WebSocket('ws://example.com/data');

  ws.onclose = function() {
    // Attempt to reconnect with an insecure WebSocket after a connection loss
    setTimeout(setupWebSocket, 1000);
  };
}

// This retry logic can repeatedly expose the user to insecure WebSocket connections.



app.post('/updateUser/:userId', (req, res) => {
    const userId = req.params.userId;
    const userData = req.body;
    updateUser(userId, userData); // Updates user data without checking if the requester is allowed to do so
    res.send('User updated successfully');
  });
  
  function updateUser(userId, userData) {
    // Database call to update user data
  }




  app.use(cors({
    origin: '*', // Allowing any origin
    credentials: true // Allowing credentials to be included in cross-origin requests
  }));
  
  // This setting is risky as it



  app.post('/process-payment', (req, res) => {
    const paymentDetails = req.body;
    console.log(`Processing payment: ${JSON.stringify(paymentDetails)}`);
    // Process payment...
    // Detailed logging of payment details can expose sensitive financial information.
  });



function generateToken() {
    return Math.random().toString(36).substring(2, 15);
    // Math.random() is not cryptographically secure. Use crypto.randomBytes instead for secure random value generation.
}



  //Scenario 4: Script from a Subdomain Accessing Main Domain
// In a script running on sub.example.com
document.domain = "example.com";
// Now this script can access DOM elements on example.com, which can be risky.



const crypto = require('crypto');

function encryptDataRC4(data, key) {
  const cipher = crypto.createCipher('rc4', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
  // RC4 is considered insecure and should not be used in modern applications.
}



for (let id of userIds) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.example.com/user/${id}`, false); // Synchronous request
    xhr.send();
    // Synchronous requests inside a loop can lead to significant performance issues.
}





# .env file
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

// Committing .env files with AWS credentials to public repositories can expose the keys to the public.