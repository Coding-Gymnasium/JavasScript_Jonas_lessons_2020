'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', () => {
//  window.location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

const miss = () => {
  if(score > 1){
    score--; 
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over!';
  document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    miss();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    miss();
  }
});
