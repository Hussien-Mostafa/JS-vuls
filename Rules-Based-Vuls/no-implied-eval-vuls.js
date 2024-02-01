



//Scenario 1: setTimeout with String Argument
function delayedAlert(message, delay) {
    // Using a string as the first argument to setTimeout can lead to implied eval
    setTimeout("alert('" + message + "')", delay);
}

// This can be exploited if message is controlled by the user and includes closing quotes and other commands.





//Scenario 2: setInterval with String Argument
function calculateResult() {
    var userExpression = document.getElementById("calc-input").value; // User supplied mathematical expression
    var result = eval(userExpression); // Calculating the expression directly
    console.log("The result is: " + result);
}

// An attacker could enter a string that is code, not a mathematical expression, leading to code execution.





//Scenario 3: Function Constructor with User Input
var userInput = "console.log('User input');"; // Could be user input from URL or form
// Using the Function constructor with strings can act like an eval.
var func = new Function(userInput);

// Executing the function could be harmful if userInput includes malicious code.
func();


//Scenario 4: Using setTimeout with Template Literals
function updateUserInterface(elementId, value) {
    // Template literals with a string argument in setTimeout can be as risky as eval if value is not sanitized
    setTimeout(`document.getElementById('${elementId}').innerText = '${value}'`, 1000);
}

// This is dangerous as it can execute arbitrary code if value includes JavaScript code snippets.

//Scenario 5: Dynamic Script Loading with setInterval
function loadScriptEveryMinute(scriptUrl) {
    // Dynamically loading a script using setInterval with string argument
    setInterval("loadScript('" + scriptUrl + "')", 60000);
}

// This is risky especially if the scriptUrl is from an untrusted source.


//Scenario 6: Using setInterval for Polling with Dynamic Code Execution
var dynamicFunctionName = "checkUpdates"; // Potentially from user input or configuration
// Polling with dynamic function names can lead to security issues
setInterval(dynamicFunctionName + "()", 3000);

// If the dynamicFunctionName is manipulated, it could lead to arbitrary code execution.
