//Scenario 1: Global CORS Configuration Allowing All Origins
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



//Scenario 2: Specific Route with Permissive CORS
app.get('/public-api', cors({
  origin: '*' // Overly permissive CORS for a specific route
}), (req, res) => {
  res.json({ data: 'This data is accessible from any origin' });
});

// Even if the rest of your application has secure CORS settings, this specific route is exposed.



//Scenario 3: Dynamic CORS Origin Based on User Input
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


//Scenario 4: Verbose Logging of User Authentication
app.use(cors({
  origin: '*', // Allowing any origin
  credentials: true // Allowing credentials to be included in cross-origin requests
}));

// This setting is risky as it