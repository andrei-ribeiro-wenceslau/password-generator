// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseCharacters = upperCaseCharacters.map(upperCaseCharacters => upperCaseCharacters.toLowerCase());
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','\\',':',';','"',"'",'<','>',',','.','/','?',];
const numericCharacters = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]


// const newarray = upperCaseCharacters.concat(lowerCaseCharacters);
// console.log(newarray);



//Generate passord function
function generatePassword() {
 var passwordCharactersLengh = prompt("How many characters would you like you password to contain?");
 var confirmSpecialCharacters = confirm("Click Ok to confirm including especial characters.");
 var confirmNumericCharacters = confirm("Click Ok to confirm including numeric characters.");
 var confirmLowerCaseCharacters = confirm("Click Ok to confirm including lowercase characters.");
 var confirmUpperCaseCharacters = confirm("Click Ok to confirm including uppercase characters.");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
