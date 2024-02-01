function calculateResult() {
    var userExpression = document.getElementById("calc-input").value; // User supplied mathematical expression
    var result = eval(userExpression); // Calculating the expression directly
    console.log("The result is: " + result);
}

// An attacker could enter a string that is code, not a mathematical expression, leading to code execution.


function calculateResult() {
    var userExpression = document.getElementById("calc-input").value; // User supplied mathematical expression
    var result = eval(userExpression); // Calculating the expression directly
    console.log("The result is: " + result);
}

// An attacker could enter a string that is code, not a mathematical expression, leading to code execution.



function displaySearchResults(results) {
    // Assuming 'results' is an array of HTML strings from a backend search API
    results.forEach(function(result) {
        var div = document.createElement('div');
        // Setting innerHTML directly from external sources without sanitization
        div.innerHTML = result;
        document.getElementById("search-results").appendChild(div);
    });
}

// If the backend is compromised or the content isn't sanitized, this could lead to XSS.



const https = require('https');

// Disable SSL certificate validation for all requests
https.globalAgent.options.rejectUnauthorized = false;

// Any subsequent https request will now be insecure
https.get('https://example.com', (res) => {
  // Processing the response
});




try {
    // Some sensitive operation
  } catch (error) {
    console.error(`Error during sensitive operation: ${error}`);
  }
  
  // If the error object contains sensitive details, such as stack traces or user information, logging it is unsafe.




function loadUserScript(username) {
    var scriptUrl = "/user-scripts/" + username + ".js";
    document.write('<script src="' + scriptUrl + '"></script>');
    // This can be dangerous if the username variable is not properly sanitized,
    // as it could lead to an XSS vulnerability.
}





function connectWebSocket(secure) {
    const protocol = secure ? "wss://" : "ws://";
    const ws = new WebSocket(protocol + "example.com/data");
  
    ws.onmessage = function(event) {
      // Handle the data
    };
  
    // The connection may fallback to an insecure ws:// connection.
  }
  
  // This code attempts to allow for both secure and insecure WebSocket connections,
  // which could be dangerous if 'secure' is false.



  app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    res.download(`/uploads/${filename}`);
    // Users can download any file from the server if they know or guess the filename.
  });




  app.get('/public-api', cors({
    origin: '*' // Overly permissive CORS for a specific route
  }), (req, res) => {
    res.json({ data: 'This data is accessible from any origin' });
  });
  
  // Even if the rest of your application has secure CORS settings, this specific route is exposed.



  try {
    // Some operation involving sensitive data
  } catch (error) {
    console.error(`Error during operation: ${error}`);
    // This can inadvertently log sensitive information contained in the error object.
  }



const crypto = require('crypto');

function generateHash(data) {
  return crypto.createHash('md5').update(data).digest('hex');
  // MD5 is a deprecated hashing algorithm due to its vulnerabilities and should not be used for cryptographic purposes.
}



// In the main page (www.example.com)
document.domain = "example.com";

// In the iframe (sub.example.com)
document.domain = "example.com";

// This allows for communication between the main page and the iframe across subdomains,
// but it weakens the security model by relaxing the same-origin policy.



const crypto = require('crypto');

function encryptDataDES(data, key) {
  const cipher = crypto.createCipher('des-ede3-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
  // DES and 3DES are outdated and not recommended due to their short key lengths and vulnerability to brute-force attacks.
}


//Scenario 2: Synchronous Request in Event Handlers
document.getElementById('load-button').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', false); // Synchronous request
    xhr.send();
  
    // This will block the UI until the request completes, leading to a poor user experience.
  });


  // config.json
{
    "awsAccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "awsSecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  }
  
  // Storing AWS credentials in configuration files that are committed to version control systems like Git exposes them to anyone with access to the repository.



  


