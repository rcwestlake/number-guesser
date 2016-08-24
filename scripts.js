
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
var resetRangeButton = document.querySelector('#reset-range-button');

var min = 0;
var max = 100;

// initialize answer, comes after min and max are defined
var answer = generateRandom();

// get a random number between min and max
function generateRandom() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// converts random number to an integer. Called in gameTest function.
function convertToInt(number) {
  return parseInt(number);
}

// clears guess input field
function clearInput() {
  guessField.value = '';
}

// checks to see if user input is a number and within the min and max range
function checkInput (number){
  if (isNaN(number)) {
    alert('Please enter a number. Not a string.');
    return false;//exit function
 }
 console.log(number)
 if ((number < min) || (number > max)) {
   alert('Please enter a number between ' + min + ' and ' + max + '.');
   return false;
 } else {
   return true;
 }
}

//game sequence, call functions that takes in user guess and turns into integer
// updates text in HTML to provide feedback on guess
function gameTest() {
  var userGuess = document.querySelector('#guess').value;
  var guessInt = convertToInt(userGuess);

  if(checkInput(userGuess) === false){ //check for valid input
    clearInput();
    return;
  }

  newGameButton.disabled = false;

  lastGuess.innerText = guessInt;
  clearInput();
  h3.innerText =  'Your last guess was:';

  if (guessInt > answer) {
    feedback.innerText = 'Sorry, that guess is too high. Try a lower number.';
  } else if (guessInt < answer) {
    feedback.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }

  if (guessInt === answer) {
    feedback.innerText = 'Congratulations, you win! New game started, but harder this time! Guess again';
    max = max + 10;
    min = min - 10;
    currentMax.innerText = max;
    currentMin.innerText = min;
    answer = generateRandom();
    newGameButton.disabled = true;
    alert('Congratulations, you win!!!!');
  }
}

// runs game when guess button is clicked
guessButton.addEventListener('click', function(){
  gameTest();
});

//run game with enter in field
guessField.onkeydown = function(e) {
   if(e.keyCode == 13){
     gameTest();
   }
};

// disable clear and guess button if input field is empty
if(guessField.value === '') {
  clearButton.disabled = true;
  guessButton.disabled = true;
}

//disable new game on first load
newGameButton.disabled = true;

// enable guess, clear, and new game buttons
guessField.addEventListener('keyup', function(){
  var guessField = document.querySelector('#guess');
  if (guessField.value !== ''){
    clearButton.disabled = false;
    guessButton.disabled = false;
  }else{
    clearButton.disabled = true;
    guessButton.disabled = true;
  }
});

//clear input field when clear button is clicked
clearButton.addEventListener('click', function(){
  clearInput();
});


// run new game when button is clicked
newGameButton.addEventListener('click', function(){
  clearInput();
  answer = generateRandom();
  lastGuess.innerText = '___';
  h3.innerText = 'Make a guess!';
  feedback.innerText = 'New Game Started';
});


// allows user to modify min and max range, updates fields
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
    h3.innerText = 'Make a guess!';
    feedback.innerText = 'New Game Started';
  }
});

// clears the min and max fields
resetRangeButton.addEventListener('click', function () {
  minField.value = '';
  maxField.value = '';
});
