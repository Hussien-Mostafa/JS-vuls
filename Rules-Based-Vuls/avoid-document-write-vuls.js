
//Scenario 1: Dynamically Writing Scripts with User Input
function loadUserScript(username) {
    var scriptUrl = "/user-scripts/" + username + ".js";
    document.write('<script src="' + scriptUrl + '"></script>');
    // This can be dangerous if the username variable is not properly sanitized,
    // as it could lead to an XSS vulnerability.
}



//Scenario 2: Writing Content Based on URL Parameters
function writeAdvertisement() {
    var adId = new URLSearchParams(window.location.search).get('ad');
    document.write('<script src="http://ads.example.com/ad?ID=' + adId + '"></script>');
    // Including external scripts based on URL parameters without proper validation can be insecure.
}



//Scenario 3: Injecting HTML into the Document
function displayUserProfile(userId) {
    var profileHtml = getUserProfileHtml(userId); // Assume this function returns HTML from the server
    document.write(profileHtml);
    // Writing raw HTML into the document can be unsafe if the HTML is not properly sanitized.
}


//Scenario 4: Overwriting Document with External Content
function loadExternalContent(url) {
    fetch(url).then(response => response.text()).then(data => {
        document.write(data);
        // Overwriting the entire document with fetched content can be insecure,
        // especially if the content comes from an untrusted source.
    });
}

