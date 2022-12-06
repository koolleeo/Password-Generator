// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



//define global variables

let optionsValid = false;
let passwordLength = null;
let passwordOptions = [];
let characterArray = [];

// Function to prompt user for password options

function getPasswordOptions() {

  let specialChar;
  let numericChar;
  let lowerChar;
  let upperChar;
  let attempts = 0;
  let defaultText = 'Enter a password length, between 10 and 64';
  passwordOptions = [];
  
  //prompt user to enter number of characters that they want the password to contain

  passwordLength = prompt('How many characters would you like your password to contain?',defaultText);

  //if the user presses cancel, exit the script.

  if (passwordLength===null) {
      return;
  }

  //if the user enters invalid characters or password length, prompt the user 2 more times. Exit script if cancels prompt 

  while ((isNaN(passwordLength) === true || passwordLength < 10 || passwordLength > 64) && attempts < 2)  {
      
      alert('Password Length must be a valid number between 10 and 64');
      passwordLength = prompt('How many characters would you like your password to contain?',defaultText);

      if (passwordLength===null) {
          return;
      }

      attempts++;
  } 
 
    //push password options into array, unless 3 failed attemps to input valid password length

    if (attempts ===2) {
      alert('Unable to create Password using your input - Password Length must be a valid number between 10 and 64');
      optionsValid = false;
      passwordLength = false;
  } else {
  
  specialChar = confirm('Click OK to confirm including special characters');
  passwordOptions.push(['specialChar',specialChar,specialCharacters]);

  numericChar = confirm('Click OK to confirm including numeric characters');
  passwordOptions.push(['numericChar',numericChar, numericCharacters]);

  lowerChar = confirm('Click OK to confirm including lowercase characters');
  passwordOptions.push(['lowerChar',lowerChar,lowerCasedCharacters]);

  upperChar = confirm('Click OK to confirm including uppercase characters');
  passwordOptions.push(['upperChar',upperChar,upperCasedCharacters]);

  //validate that at least one password character option has been selected

  if (specialChar || numericChar || lowerChar || upperChar) {
      optionsValid = true;
  } else {
      alert('No valid options selected - You must select at least one character type \nPlease try again');
      optionsValid = false;
  }
  
}

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);