'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', () => {
//  window.location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  setScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const setScore = (currentScore) => {
  document.querySelector('.score').textContent = currentScore;
}
//=======================
//=======================

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  const miss = () => {
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--; 
      setScore(score);
    } else {
      displayMessage('💀👎💣 You Lost!');
    document.querySelector('body').style.backgroundColor = '#8B0000';
      setScore(0);
    }
  }

  if(!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    miss();
  }
});

