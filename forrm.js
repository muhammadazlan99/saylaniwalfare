
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');
var fourth = document.querySelector('.fourth');
var fifth = document.querySelector('.fifth');


function validator() {
  var fNameInput = document.getElementById('fname').value;
  var lNameInput = document.getElementById('lname').value;
  var emailInput = document.getElementById('email').value;
  var passwordInput = document.getElementById('password').value;
  var againPasswordInput = document.getElementById('password-again').value;

  if (fNameInput === '' || lNameInput === '' || emailInput === '' || passwordInput === '' || againPasswordInput === '') {
    console.log('error');
    return false;
  } else {
    console.log('submitted');
    return true;
  }
}

var inputFields = document.querySelectorAll('input');
var validationText = document.querySelectorAll('.validation-text');

validationText.forEach(function (div) {
  div.textContent = '';
});



function checkValidate() {
  var valid = true;

  inputFields.forEach(function (input) {
    if (input.value.trim() === '') {
      valid = false;
    }
  });

  function updateValidationText(fieldIndex, errorMessage) {
    if (inputFields[fieldIndex].value === '') {
      validationText[fieldIndex].innerHTML = errorMessage;
    } else {
      validationText[fieldIndex].innerHTML = '';
    }
  }

  updateValidationText(0, 'pls fill this first');
  updateValidationText(1, 'pls fill this first');
  updateValidationText(2, 'pls fill this first');
  updateValidationText(3, 'pls fill this first');
  updateValidationText(4, 'pls fill this first');

  if (valid) {
    console.log('greatt');
    var submitBtn = document.getElementById('submit-btn');
    submitBtn.innerHTML = '';
    setTimeout(function () {
      submitText.textContent = 'submited succesfully';
    }, 300);

    inputFields.forEach(function (input) {
      input.value = '';
    });
  }

  return valid;
}

function inputFocus1(input) {
  first.innerHTML = input.value !== '' ? '' : 'pls fill this first';
}

function inputFocus2(input) {
  second.innerHTML = input.value !== '' ? '' : 'pls fill this first';
}

function inputFocus3(input) {
  third.innerHTML = input.value !== '' ? '' : 'pls fill this first';
}

function inputFocus4(input) {
  if (input.value !== '') {
    input.style.fontSize = 'Xlarge';
  }
}

let passwordField = document.getElementById('password');
console.log(passwordField);

function inputFocus5(input) {
  fifth.innerHTML = input.value !== '' ? '' : 'pls fill this first';
  if (input.value !== '' && input.value !== passwordField.value) {
    fifth.innerHTML = 'Passwords do not match. ';
  }
}

var string = '1234567890abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ!@#$^&*';
var capitalChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var smallChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=',
  '+'
];
var numberchar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let isCapitalCharacter = 0;
let isSmallCharacter = 0;
let isSpecialCharacter = 0;
let isNumber = 0;
var password = '';
userInput = 8;

function passwordGenerator() {
  for (var i = 0; i < userInput; i++) {
    var result = Math.floor(Math.random() * string.length);
    var passChar = string[result];
    password += passChar;
  }
}

function isPasswordStrong() {
  passwordGenerator();
  for (var i = 0; i < password.length; i++) {
    if (capitalChars.includes(password[i])) {
      isCapitalCharacter++;
    } else if (smallChars.includes(password[i])) {
      isSmallCharacter++;
    } else if (specialChars.includes(password[i])) {
      isSpecialCharacter++;
    } else if (numberchar.includes(password[i])) {
      isNumber++;
    }
  }

  
}

function passwordGenerate() {
  pswrdInputField = document.getElementById('password');
  isPasswordStrong();
  pswrdInputField.value = password;
}