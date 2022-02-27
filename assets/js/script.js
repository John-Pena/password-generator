// put assignment code here
var lowercase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var uppercase = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var special = [
    "!", "?", "#", "%", "&", "-", "@"
];

var generateBtn = document.querySelector("#generate");

// reference to the #generate element
var createPassword = function() {
    // ask user if they want to use lowercase letters
    var lowercasePrompt = window.confirm('Would you like to use lower case?');
    console.log(lowercase);
    
    // ask user if they want to use uppercase letters
    var uppercasePrompt = window.confirm('Would you like to use upper case?');
    console.log(uppercase);

    // ask user if they want to use numbers
    var numbersPrompt = window.confirm('Would you like to use numbers?');
    console.log(numbers);

    // ask user if they want to use special characters
    specialPrompt = window.confirm('Would you like to use special characters?');
    console.log(special);

    // ask how long they would like their password to be
    var passwordString = window.prompt("How long would you like your password to be?")
    var passwordLength = parseInt(passwordString);
    console.log(passwordLength);
    var passwordGen = ""
    if (passwordLength >= 8 && passwordLength <= 128) {
        for (var i = 0; i < passwordLength; i++) {
            // if user wants lowercase, then this will run
            if (lowercasePrompt === true) {
               var lowerChar = lowercase[Math.floor(Math.random() * lowercase.length)];
                passwordGen += lowerChar;
            }
            
            // if user wants uppercase, then this will run
            if (uppercasePrompt === true) {
               var upperChar = uppercase[Math.floor(Math.random() * uppercase.length)];
               passwordGen += upperChar;
            }

            // if user confirms wanting numbers, this will run
           if (numbersPrompt === true) {
                var numbersChar = numbers[Math.floor(Math.random() * numbers.length)];
               passwordGen += numbersChar;
            }

            // if user confirms they want special charactersm then this will run
            if (specialPrompt === true) {
                var specialChar = special[Math.floor(Math.random() * special.length)];
                passwordGen += specialChar;
            }
        }
    }
    else {
        window.alert("Password length must be atleast 8 characters.")
    }
    // will display the password created to the input box on site with generated password
    return passwordGen;
}

// write password to the #password input
function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);