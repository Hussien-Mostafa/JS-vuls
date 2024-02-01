//Scenario 1: User Profile Access without Proper Authorization Checks
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



//Scenario 2: File Download with User-Supplied Filename
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  res.download(`/uploads/${filename}`);
  // Users can download any file from the server if they know or guess the filename.
});



//Scenario 3: Order Details Accessible by Order ID
app.get('/order/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const orderDetails = getOrderDetails(orderId); // Fetches order details
  res.json(orderDetails);
  // An attacker could access order details of other users by changing the orderId parameter.
});

function getOrderDetails(orderId) {
  // Database call to get order details
}


//Scenario 4: Updating User Data without Verification
app.post('/updateUser/:userId', (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  updateUser(userId, userData); // Updates user data without checking if the requester is allowed to do so
  res.send('User updated successfully');
});

function updateUser(userId, userData) {
  // Database call to update user data
}

//Scenario 5: Accessing Logs by Log ID
app.get('/logs/:logId', (req, res) => {
  const logId = req.params.logId;
  const logData = getLogData(logId); // Assume this fetches log data
  res.json(logData);
  // If log IDs are predictable, an attacker could potentially access sensitive log data.
});

function getLogData(logId) {
  // Function to retrieve log data
}