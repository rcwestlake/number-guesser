
var answer = generateRandom();
var feedback = document.querySelector('#feedback');
var guessField = document.querySelector('#guess');
var guessButton = document.querySelector('#guess-button');
var clearButton = document.querySelector('#clear-button');
var newGameButton = document.querySelector('#reset-button');
var lastGuess = document.querySelector('#last-guess');
var h3 = document.querySelector('h3');

var min = 0;
var max = 100;
var test = 2;

function generateRandom() {
 return Math.floor((Math.random() * 100) + 1);
}
//test random number
console.log(generateRandom());

function convertToInt(number) {
 return parseInt(number);
}
console.log(convertToInt(generateRandom()));

function checkInput (number, min, max){
 if (isNaN(number)) {// check if guess is a number and not a string or boolean
   alert('Please enter a number. Not a string.');
   return false;
 }
 if ((number < min) || (number > max)) {//check if guess is within range
   alert('Please enter a number between ' + min + ' and ' + max + '.');
   return false;
 } else {
   return true;
 }
}

function gameTest() {//game sequence
  var userGuess = document.querySelector('#guess').value;
  var guessInt = convertToInt(userGuess);
  if(checkInput(userGuess, min, max) === false){ //check for valid input
    return;
  }

  lastGuess.innerText = guessInt;
  h3.innerText =  'Your last guess was:';
  console.log(userGuess);//test
  console.log(answer);//test

  if (guessInt > answer) {
    feedback.innerText = 'Sorry, that guess is too high. Try a lower number.';
  } else if (guessInt < answer) {
    feedback.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }

  if (guessInt === answer) {
    feedback.innerText = 'Congratulations, you win! Click New Game to play again';
    alert('Congratulations, you win! Click New Game to play again');
  }
}

function clearInput() {
  guessField.value = '';
}


guessButton.addEventListener('click', function(){//run game with click on button
  gameTest();
});

guessField.onkeydown = function(e) {//run game with enter in field
   if(e.keyCode == 13){
     gameTest();
   }
};

// if(guessField.value === ''){
//   clearButton.disabled = true;
//   newGameButton.disabled = true;
// }

clearButton.addEventListener('click', function(){//clear input field when clear button is clicked
  clearInput();
});

//new game
//clear input
//generate new random number

newGameButton.addEventListener('click', function(){
  clearInput();
  answer = generateRandom();
  lastGuess.innerText = '___';
  h3.innerText = '';
  feedback.innerText = '';
});
