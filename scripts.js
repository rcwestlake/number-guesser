
var feedback = document.querySelector('#feedback');
var guessField = document.querySelector('#guess');
var guessButton = document.querySelector('#guess-button');
var clearButton = document.querySelector('#clear-button');
var newGameButton = document.querySelector('#reset-button');
var lastGuess = document.querySelector('#last-guess');
var h3 = document.querySelector('h3');
var currentMax = document.querySelector('#cur-max');
var currentMin = document.querySelector('#cur-min');
var minField = document.querySelector('#min');
var maxField = document.querySelector('#max');
var rangeButton = document.querySelector('#new-range-button');

var min = 0;
var max = 100;


function generateRandom() {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var answer = generateRandom();


function convertToInt(number) {
 return parseInt(number);
}

function checkInput (number, min, max){
 if (isNaN(number)) {// check if guess is a number and not a string or boolean
   alert('Please enter a number. Not a string.');
   return false;
 }
 console.log(number)
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
  clearInput();
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
    max = max + 10;
    currentMax.innerText = max;
    answer = generateRandom();
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

if(guessField.value === '') {
  clearButton.disabled = true;
  guessButton.disabled = true;
}

guessField.addEventListener('keyup', function(){
  var guessField = document.querySelector('#guess');
  if (guessField.value !== ''){
    clearButton.disabled = false;
    newGameButton.disabled = false;
    guessButton.disabled = false;
  }else{
    clearButton.disabled = true;
    guessButton.disabled = true;
  }
});

clearButton.addEventListener('click', function(){ //clear input field when clear button is clicked
  clearInput();
});


newGameButton.addEventListener('click', function(){
  clearInput();
  answer = generateRandom();
  lastGuess.innerText = '___';
  h3.innerText = '';
  feedback.innerText = '';
});

rangeButton.addEventListener('click', function() {

  if (isNaN(maxField.value) || isNaN(minField.value)){
    alert("Please Enter A Real Number");
  }else{
  var maxInput = maxField.value;
  var minInput = minField.value;
  max = convertToInt(maxInput);
  min = convertToInt(minInput);
  currentMax.innerText = max;
  currentMin.innerText = min
  answer = generateRandom();
  lastGuess.innerText = '___';
  h3.innerText = '';
  feedback.innerText = '';
  }
});
