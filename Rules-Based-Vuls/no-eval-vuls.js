// Scenario 1: Dynamic Function Execution Based on User Input
function runUserFunction() {
    var userFunction = document.getElementById("function-name").value; // User supplied function name
    eval(userFunction + "()"); // Executing the user-supplied function name
}
// Risk: Potential execution of malicious code.

// Scenario 2: Calculating Expressions from User Input
function calculateResult() {
    var userExpression = document.getElementById("calc-input").value; // User supplied mathematical expression
    var result = eval(userExpression); // Calculating the expression directly
    console.log("The result is: " + result);
}
// Risk: Code execution through user input.

// Scenario 3: Setting Object Properties with eval()
function setObjectProperty(obj, propName, propValue) {
    eval("obj." + propName + " = '" + propValue + "'");
}
// Risk: Arbitrary code execution or property injection.

// Scenario 4: JSON Parsing with eval()
function parseJSON(jsonString) {
    var data = eval("(" + jsonString + ")");
    return data;
}
// Risk: Unsafe parsing if jsonString is user-controlled.

// Scenario 5: Executing Code from Local Storage
function executeLocalStorageCode() {
    var code = localStorage.getItem('userCode'); // Code stored in local storage
    eval(code); // Executing the code from local storage
}
// Risk: Danger if the local storage code can be tampered with.

// Scenario 6: Using eval() in Event Handlers
window.onload = function() {
    var userClickHandler = localStorage.getItem('onClickHandler');
    document.getElementById('myButton').setAttribute('onclick', 'eval(' + userClickHandler + ')');
};
// Risk: XSS if the handler code is not sanitized.
