
//Scenario 1: Hardcoding AWS Keys in the Application Code
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});

// This exposes the AWS keys directly in the source code, which can be accessed by anyone who views the code.



//Scenario 2: Including AWS Keys in Configuration Files Committed to Version Control
// config.json
{
  "awsAccessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "awsSecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}

// Storing AWS credentials in configuration files that are committed to version control systems like Git exposes them to anyone with access to the repository.



//Scenario 3: Embedding AWS Keys in Client-side JavaScript
// In a client-side JavaScript file
const awsAccessKeyId = 'AKIAIOSFODNN7EXAMPLE';
const awsSecretAccessKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

// Embedding AWS keys in client-side scripts makes them visible to anyone who inspects the webpage.


//Scenario 4: AWS Keys in Environment Files (.env) Committed to Public Repositories
# .env file
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

// Committing .env files with AWS credentials to public repositories can expose the keys to the public.

//Scenario 5: Logging AWS Keys in Debug Logs
console.log(`AWS Access Key: ${process.env.AWS_ACCESS_KEY_ID}`);
console.log(`AWS Secret Key: ${process.env.AWS_SECRET_ACCESS_KEY}`);

// Logging AWS keys, even for debugging purposes, can lead to unintentional exposure, especially if logs are stored or monitored externally.


//Scenario 6: AWS Keys in Dockerfiles or Docker Compose Files
# In a Dockerfile
ENV AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
ENV AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

// Including AWS keys in Dockerfiles or Docker Compose files and then pushing them to public repositories exposes the keys.