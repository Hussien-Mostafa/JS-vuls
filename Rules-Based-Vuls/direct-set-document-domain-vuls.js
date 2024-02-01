
//Scenario 1: Relaxing the Same-Origin Policy for Cross-Origin Frames
document.domain = "example.com";
// This allows a page at subdomain.example.com to access resources at another.subdomain.example.com
// However, it can be dangerous as it broadens the scope of domains that can interact with each other.



//Scenario 2: Communication Between a Main Page and Iframe
// In the main page (www.example.com)
document.domain = "example.com";

// In the iframe (sub.example.com)
document.domain = "example.com";

// This allows for communication between the main page and the iframe across subdomains,
// but it weakens the security model by relaxing the same-origin policy.



//Scenario 3: Cross-Origin AJAX Requests
document.domain = "example.com";
$.ajax({
    url: "http://api.example.com/data",
    // Cross-origin AJAX request
    // The change in document.domain can lead to unintended exposure to or from other subdomains.
});


//Scenario 4: Script from a Subdomain Accessing Main Domain
// In a script running on sub.example.com
document.domain = "example.com";
// Now this script can access DOM elements on example.com, which can be risky.



//Scenario 5: Sharing Cookies Across Subdomains
document.domain = "example.com";
// This allows scripts from various subdomains of example.com to share cookies.
// It can be a security risk if not handled properly, as it can expose cookies to a wider range of domains.


//Scenario 6: Manipulating DOM of a Cross-origin Parent Frame
// In an embedded frame or popup
document.domain = "example.com";
// Access and manipulate the DOM of the parent frame
// This can be exploited in a scenario where the parent frame did not intend to allow such access.

