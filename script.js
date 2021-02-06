// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// Setting the password length

  var passwordLength = prompt("Please nominate the length of your password by inputting a number between 8 and 128.");

  // Determining the possible password values

  var lowercaseCheck = confirm("Do you want to include lowercases in the password?");
  var uppercaseCheck = confirm("Do you want to include uppercases in the password?");
  var numericCheck = confirm("Do you want to include numbers in the password?");
  var specialCharCheck = confirm("Do you want to include special characters in the password?");

  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "123456789"
  var specialChar = "!@#$%^&*_+"
 
  if (lowercaseCheck === true && uppercaseCheck === true && numericCheck === true && specialCharCheck === true) {
    var values = lowercase + uppercase + numeric + specialChar;
    } 
  else if (lowercaseCheck !== true && uppercaseCheck === true && numericCheck === true && specialCharCheck === true) {
    var values = uppercase + numeric + specialChar;
    } 
  else if (lowercaseCheck !== true && uppercaseCheck !== true && numericCheck === true && specialCharCheck === true) {
    var values = numeric + specialChar;
  } 
  else if (lowercaseCheck !== true && uppercaseCheck !== true && numericCheck !== true && specialCharCheck === true) {
    var values = specialChar;
  }
  else if (lowercaseCheck === true && uppercaseCheck !== true && numericCheck !== true && specialCharCheck === true) {
    var values = lowercase + specialChar;
  }
  else if (lowercaseCheck !== true && uppercaseCheck === true && numericCheck !== true && specialCharCheck === true) {
    var values = uppercase + specialChar;
  }
  else if (lowercaseCheck === true && uppercaseCheck !== true && numericCheck === true && specialCharCheck === true) {
    var values = lowercase + numeric + specialChar;
  }
  else if (lowercaseCheck === true && uppercaseCheck === true && numericCheck !== true && specialCharCheck === true) {
    var values = lowercase + uppercase + specialChar;
  }
  else if (lowercaseCheck === true && uppercaseCheck === true && numericCheck === true && specialCharCheck !== true) {
    var values = lowercase + uppercase + numeric;
  }
  else if (lowercaseCheck === true && uppercaseCheck === true && numericCheck !== true && specialCharCheck !== true) {
    var values = lowercase + uppercase;
  }
  else if (lowercaseCheck === true && uppercaseCheck !== true && numericCheck !== true && specialCharCheck !== true) {
    var values = lowercase;
  }
  else if (lowercaseCheck === true && uppercaseCheck !== true && numericCheck === true && specialCharCheck !== true) {
    var values = lowercase + numeric;
  }
  else if (lowercaseCheck !== true && uppercaseCheck === true && numericCheck === true && specialCharCheck !== true) {
    var values = uppercase + numeric;
  }
  else if (lowercaseCheck !== true && uppercaseCheck === true && numericCheck !== true && specialCharCheck !== true) {
    var values = uppercase;
  }
  else {
    var values = numeric;
  } 
  

  
  var password = "";

//create for loop to choose password characters
  for(var i = 0; i <= passwordLength-1; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
