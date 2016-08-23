var userGuess = document.querySelector('#guess');


var randomNum = generateRandom();

var min = 0;
var max = 0;
var test = 2;

function generateRandom() {
 return Math.floor((Math.random() * 100) + 1);
}

function convertToInt(number) {
 return parseInt(number);
}

function checkInput (number, min, max){
 if (isNaN(number)) {// check if guess is a number and not a string or boolean
   alert('Please enter a number. Not a string.');
   return false;
 }
 if ((number < min) || (number > max)) {//check if guess is within range
   alert('Please enter a number between ' + min + ' and ' + max'.');
   return false;
 } else {
   return true;
 }
}

function gameTest() {//game sequence

 if(checkInput(userGuess, min, max) === false){ //check for valid input
   return;
 }
//check if below answer, return hint
//check if above answer, return hint
//check if correct, return congratulations
 var guessInt = convertToInt(userGuess);
}
