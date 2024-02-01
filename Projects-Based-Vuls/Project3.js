function setObjectProperty(obj, propName, propValue) {
    eval("obj." + propName + " = '" + propValue + "'");
}

// If either propName or propValue is user-controlled without proper sanitization,
// it could result in arbitrary code execution or property injection.




var userInput = "console.log('User input');"; // Could be user input from URL or form
// Using the Function constructor with strings can act like an eval.
var func = new Function(userInput);

// Executing the function could be harmful if userInput includes malicious code.
func();


function updateUserProfile(profileData) {
    // profileData contains HTML content with user details
    document.getElementById("profile").innerHTML = profileData.bio;
    // Other profile updates...
}

// If profileData.bio is user-controlled and includes script tags, it could be used for XSS.




const axios = require('axios');

// Making an HTTP request with axios and disabling SSL certificate check
axios.get('https://example.com/api/data', {
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false // This allows connections to unauthorized servers
  })
});



app.post('/process-payment', (req, res) => {
    const paymentDetails = req.body;
    console.log(`Processing payment for card number: ${paymentDetails.cardNumber}`);
    
    // Process the payment...
    
    // Logging full payment details, especially card number, is a severe security risk.
  });


  function displayUserProfile(userId) {
    var profileHtml = getUserProfileHtml(userId); // Assume this function returns HTML from the server
    document.write(profileHtml);
    // Writing raw HTML into the document can be unsafe if the HTML is not properly sanitized.
}


const WebSocket = require('ws');
const server = require('http').createServer();

const wss = new WebSocket.Server({ server: server, path: "/ws" });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
});

server.listen(8080);
// The WebSocket server does not implement TLS/SSL, exposing all data to potential eavesdropping.



app.get('/order/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    const orderDetails = getOrderDetails(orderId); // Fetches order details
    res.json(orderDetails);
    // An attacker could access order details of other users by changing the orderId parameter.
  });
  
  function getOrderDetails(orderId) {
    // Database call to get order details
  }



  app.use(cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
  
  // If the whitelist is not properly managed or validated, it could lead to exposing endpoints to untrusted origins.




  function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    console.log(`Executing query: ${query}`);
    // Execute query...
    // Logging SQL queries might reveal sensitive user data or database structure.
  }




  const url = require('url');

function parseUrl(inputUrl) {
  return url.parse(inputUrl);
  // In Node.js, url.parse() is deprecated in favor of the WHATWG URL API.
}

document.domain = "example.com";
$.ajax({
    url: "http://api.example.com/data",
    // Cross-origin AJAX request
    // The change in document.domain can lead to unintended exposure to or from other subdomains.
});



const crypto = require('crypto');

function signData(data, privateKey) {
  const signer = crypto.createSign('sha1');
  signer.update(data);
  return signer.sign(privateKey, 'hex');
  // SHA1 is no longer considered secure for digital signatures due to known vulnerabilities.
}


//Scenario 3: Fetching Configuration Synchronously
function getConfig() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/config', false); // Synchronous request
    xhr.send();
  
    return xhr.responseText;
    // Fetching configuration data synchronously can delay the initialization of the application.
  }

  // In a client-side JavaScript file
const awsAccessKeyId = 'AKIAIOSFODNN7EXAMPLE';
const awsSecretAccessKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

// Embedding AWS keys in client-side scripts makes them visible to anyone who inspects the webpage.

