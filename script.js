'use strict';
// declare Random
let rand = Math.trunc(Math.random() * 20 + 1);
console.log(rand);
// set the score
let score = Number(document.querySelector('.score').textContent);
// display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// create an event listener for guess
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //  check if input is a number and not empty
  if (!guess) {
    displayMessage('Please Enter a number between 1-20!');
  }
  //  compare user's guess with random number
  // if correct do
  else if (rand === guess) {
    document.querySelector('.number').textContent = rand;
    displayMessage('You Guessed Right!');
    document.querySelector('.highscore').textContent =
      score > document.querySelector('.highscore').textContent
        ? score
        : document.querySelector('.highscore').textContent;
    document.querySelector('.check').textContent = 'Won!';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').style.backgroundColor = 'grey';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // if the user guessed wrong
  else if (rand !== guess) {
    score--;
    displayMessage(guess < rand ? 'Too Low!' : 'Too High!');
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('Game Over!');
      document.querySelector('.check').textContent = 'Lost!';
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').style.backgroundColor = 'grey';
    }
  }
});

//  Reset game when user clicks again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.check').style.backgroundColor = '#eee';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  score = 20;
  rand = Math.trunc(Math.random() * 20 + 1);
  console.log(rand);
});
