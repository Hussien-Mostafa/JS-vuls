
//Scenario 1: Logging Database Connection Strings
const dbConnect = (dbConfig) => {
  console.log(`Connecting to database with user: ${dbConfig.user} and password: ${dbConfig.password}`);
  // Code to initiate database connection
};

// If dbConfig contains sensitive information, such as user credentials, this log is a security risk.



//Scenario 2: Error Handling that Exposes Sensitive Data
try {
  // Some sensitive operation
} catch (error) {
  console.error(`Error during sensitive operation: ${error}`);
}

// If the error object contains sensitive details, such as stack traces or user information, logging it is unsafe.



//Scenario 3: Logging Payment Details
app.post('/process-payment', (req, res) => {
  const paymentDetails = req.body;
  console.log(`Processing payment for card number: ${paymentDetails.cardNumber}`);
  
  // Process the payment...
  
  // Logging full payment details, especially card number, is a severe security risk.
});



//Scenario 4: Verbose Logging of User Authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`User login attempt: username: ${username}, password: ${password}`);
  
  // Authentication logic...
  
  // Passwords should never be logged, as they are sensitive data.
});



//Scenario 5: Logging API Keys
const fs = require('fs');

fs.readFile('/path/to/config.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Loaded configuration: ${data}`);
  
  // If the configuration
}



//Scenario 6: Printing Configuration Files Containing Secrets
const fs = require('fs');

fs.readFile('/path/to/config.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Loaded configuration: ${data}`);
  
  // If the configuration
}


//Scenario 7: Logging User Credentials
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: username = ${username}, password = ${password}`);
  // Authenticate user...
  // Logging credentials is a severe security risk, as it exposes user passwords in plain text.
});



//Scenario 8: Error Handling Exposing Sensitive Data
try {
  // Some operation involving sensitive data
} catch (error) {
  console.error(`Error during operation: ${error}`);
  // This can inadvertently log sensitive information contained in the error object.
}



//Scenario 9: Logging Database Queries with User Data
function getUserData(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  console.log(`Executing query: ${query}`);
  // Execute query...
  // Logging SQL queries might reveal sensitive user data or database structure.
}


//Scenario 10: Verbose Logging in Payment Processing
app.post('/process-payment', (req, res) => {
  const paymentDetails = req.body;
  console.log(`Processing payment: ${JSON.stringify(paymentDetails)}`);
  // Process payment...
  // Detailed logging of payment details can expose sensitive financial information.
});

//Scenario 11: Logging API Keys or Secrets
const apiKey = getApiKey();
console.log(`Using API key: ${apiKey}`);
// Make API call...
// Logging API keys or other secrets compromises their confidentiality.


//Scenario 12: Logging Contents of Configuration Files
const config = loadConfigFile();
console.log(`Loaded configuration: ${JSON.stringify(config)}`);
// Use configuration...
// If the configuration file contains sensitive data like database passwords or API keys, this is insecure.