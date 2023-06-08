// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays of character types
const upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseCharacters = upperCaseCharacters.map((character) => character.toLowerCase());
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '/', '?'];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Generate password function
function generatePassword() {
  // Prompt user for desired password length
  var passwordCharactersLength = prompt("How many characters would you like your password to contain?");

  // Validate password length
  if (passwordCharactersLength < 8 || passwordCharactersLength > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters.");
    return generatePassword();
  }

  // Confirm character types
  var confirmSpecialCharacters = confirm("Click OK to confirm including special characters.");
  var confirmNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  var confirmLowerCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  var confirmUpperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");

  // Validate at least one character type is selected
  if (!confirmSpecialCharacters && !confirmNumericCharacters && !confirmLowerCaseCharacters && !confirmUpperCaseCharacters) {
    alert("Please choose at least one character type.");
    return generatePassword();
  }

  // Create an empty array and final password array
  var selectedCharacterTypes = [];
  var finalPassword = [];

  // Concatenate selected character types to selectedCharacterTypes
  if (confirmSpecialCharacters) {
    selectedCharacterTypes = selectedCharacterTypes.concat(specialCharacters);
  }
  if (confirmNumericCharacters) {
    selectedCharacterTypes = selectedCharacterTypes.concat(numericCharacters);
  }
  if (confirmLowerCaseCharacters) {
    selectedCharacterTypes = selectedCharacterTypes.concat(lowerCaseCharacters);
  }
  if (confirmUpperCaseCharacters) {
    selectedCharacterTypes = selectedCharacterTypes.concat(upperCaseCharacters);
  }

  // Generate random password characters
  for (let index = 0; index < passwordCharactersLength; index++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacterTypes.length);
    finalPassword.push(selectedCharacterTypes[randomIndex]);
  }

  // Convert the password array to a string
  var finalPasswordString = finalPassword.join("");

  return finalPasswordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

