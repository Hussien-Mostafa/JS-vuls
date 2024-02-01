
//Scenario 1: HTTPS Request Without Validation
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



//Scenario 2: Global Agent Settings
const https = require('https');

// Disable SSL certificate validation for all requests
https.globalAgent.options.rejectUnauthorized = false;

// Any subsequent https request will now be insecure
https.get('https://example.com', (res) => {
  // Processing the response
});



//Scenario 3: Using axios with Unsafe Configuration
const axios = require('axios');

// Making an HTTP request with axios and disabling SSL certificate check
axios.get('https://example.com/api/data', {
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false // This allows connections to unauthorized servers
  })
});


//Scenario 4: Environment Variable to Disable SSL Verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Setting the environment variable to disable SSL validation

const request = require('request');

request.get('https://example.com', (error, response, body) => {
  // Response handling
});



//Scenario 5: Custom Agent in superagent Without SSL Verification
const superagent = require('superagent');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false // Security risk: SSL certificate problems will be ignored
});

superagent
  .get('https://example.com')
  .agent(agent)
  .end((err, res) => {
    // Response handling
});




//Scenario 6: WebSocket Connection Ignoring SSL
const WebSocket = require('ws');

const ws = new WebSocket('wss://example.com', {
  rejectUnauthorized: false // Indicates the client should not check for a valid SSL certificate
});

ws.on('open', function open() {
  ws.send('Hello, server!');
});

