'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number! ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
// console.log(winningNumber);
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector(message).textContent = message;
};

// Actions to perform after every click
document.querySelector('.check').addEventListener('click', function () {
  // Inputted number by the user
  const guess = Number(document.querySelector('.guess').value);
  // If no input, display no number message
  if (!guess) {
    displayMessage('No number!');
    // If correct number, displey correct message and check if new highscore
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    displayMessage('Correct!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // If lower number, display too low message
  } else if (guess != secretNumber) {
    if (guess <= 0 || guess > 20) {
      displayMessage('Number not in range! Choose a number between 1 and 20!');
    }
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high!' : 'Number is too low'
      );
      score--;
    } else {
      displayMessage('You Lose!');
      score = 0;
    }
    document.querySelector('.score').textContent = score;
    wrongGuess('number is too low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
