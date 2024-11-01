// Reverse a String Function
function reverseString() {
    const input = document.getElementById("reverse-input").value;
    const resultElement = document.getElementById("reverse-result");

  
    resultElement.classList.remove("show");

    if (input.trim() === "" || /[^a-zA-Z0-9]/.test(input)) {
        resultElement.textContent = "Please enter a valid string without special characters.";
        resultElement.classList.add("error-text", "show");

        setTimeout(() => {
            resultElement.classList.remove("error-text", "show");
            resultElement.textContent = ""; 
        }, 4000);

        return;
    }

    // Reverse the input string
    const reversed = input.split("").reverse().join("");
    resultElement.textContent = `Reversed String: ${reversed}`;
    resultElement.classList.remove("error-text"); 
    resultElement.classList.add("success-text", "show"); 
}

// Palindrome Checker Function
function checkPalindrome() {
    const input = document.getElementById("palindrome-input").value;
    const resultElement = document.getElementById("palindrome-result");

 
    resultElement.classList.remove("show");

    // Validate if the input is a non-negative integer
    if (!/^\d+$/.test(input)) {
        resultElement.textContent = "Please enter a valid non-negative integer.";
        resultElement.classList.add("error-text", "show");

        // Set a timer to remove the error message after 4 seconds
        setTimeout(() => {
            resultElement.classList.remove("error-text", "show");
            resultElement.textContent = ""; // Clear error message
        }, 4000);

        return;
    }

    // Check if input is a palindrome
    const reversed = input.split("").reverse().join("");
    const result = input === reversed ? "is a Palindrome" : "is not a Palindrome";
    resultElement.textContent = `The number ${result}`;
    resultElement.classList.remove("error-text"); 
    resultElement.classList.add("success-text", "show"); 
}

// Tip Calculator Function
function calculateTotal() {
    const subtotalInput = document.getElementById("subtotal-input").value;
    const tipPercentageInput = document.getElementById("tip-percentage-input").value;
    const resultElement = document.getElementById("tip-result");

   
    resultElement.classList.remove("show");

    const subtotal = parseFloat(subtotalInput);
    const tipPercentage = parseFloat(tipPercentageInput);

    if (isNaN(subtotal) || subtotal < 0 || isNaN(tipPercentage) || tipPercentage < 0) {
        resultElement.textContent = "Please enter valid non-negative numbers for both fields.";
        resultElement.classList.add("error-text", "show");

        // Set a timer to remove the error message after 4 seconds
        setTimeout(() => {
            resultElement.classList.remove("error-text", "show");
            resultElement.textContent = ""; 
        }, 4000);

        return;
    }

    // Calculate tip and total
    const tipAmount = (subtotal * tipPercentage) / 100;
    const total = subtotal + tipAmount;
    resultElement.textContent = `Total Amount: $${total.toFixed(2)}`;
    resultElement.classList.remove("error-text"); 
    resultElement.classList.add("success-text", "show");
}
