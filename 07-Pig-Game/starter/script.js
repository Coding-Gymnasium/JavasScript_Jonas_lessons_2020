'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true, switch to the next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    current0Element.textContent = currentScore; // CHANGE LATER TO REFLECT ACTIVE PLAYER
  } else {
    // Switch to the next player
  }
});
