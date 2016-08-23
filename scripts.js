
var answer = generateRandom();
var feedback = document.querySelector('#feedback');
var guessButton = document.querySelector('#guess-button');

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

  console.log(userGuess);
  console.log(answer);

  if (guessInt > answer) {
    feedback.innerText = 'Sorry, that guess is too high. Try a lower number.';
  } else if (guessInt < answer) {
    feedback.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }

  if (guessInt === answer) {
    feedback.innerText = 'Congratulations, you win';
    alert('Congratulations, you win!');
  }
}

guessButton.addEventListener('click', function(){
  gameTest();
});
