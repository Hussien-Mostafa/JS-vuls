
//Scenario 1: Inserting Form Input Directly
document.getElementById("submit-button").addEventListener("click", function() {
    var element = document.getElementById("user-input").value;
    // Inserting user input directly into the DOM
    element.innerHTML = userInput;
});

// If userInput contains malicious script tags or JavaScript, it could be executed.



//Scenario 2: Displaying Search Results
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



//Scenario 3: Updating User Profile with Dynamic HTML
function updateUserProfile(profileData) {
    // profileData contains HTML content with user details
    document.getElementById("profile").innerHTML = profileData.bio;
    // Other profile updates...
}

// If profileData.bio is user-controlled and includes script tags, it could be used for XSS.


//Scenario 4: Real-time Chat Application
socket.on('chat message', function(msg) {
    var messageElement = document.createElement('div');
    // Directly inserting message content into the DOM
    messageElement.innerHTML = msg;
    document.getElementById('messages').appendChild(messageElement);
});

// If 'msg' includes malicious JavaScript, it would be executed when the message is displayed.
