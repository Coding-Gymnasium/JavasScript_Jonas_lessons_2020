'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains olovement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-06-23T23:36:17.929Z',
    '2021-06-22T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date){
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//Fake Always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
// labelDate.textContent = now;
// labelDate.textContent = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
//const day = now.getDate();
const day = `${now.getDate()}`.padStart(2, '0');
//const month = now.getMonth() + 1;
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    
    // Create current date
    
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);;
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
 ///// Converting and Checking Numbers

console.log(23 === 23.0);
// Base 10 - 0 = 9. 1/10 = 0.1. 3/10 = 3.3333333
// JS is not in base 10 but in Binary base 2. 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // This is a problem with JS calculations.

// from string to number:
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2


console.log(Number.isNaN(20)); // False
console.log(Number.isNaN('20')); // False
console.log(Number.isNaN(Number('20x'))); // true
console.log(Number.isNaN(23 / 0)); // false

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(23 / 0)); // false

//// isFinite is the best way to check whether something is a number.
*/

/*
//// Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2); // Method to calculate the area of a circle with 10 pixels radius. In this case we parse the 10 from a string.

//// Random numbers
console.log(Math.floor(Math.random() * 6) + 1);

const randomRange = (min, max) => Math.trunc(Math.random() * (max - min) + min); 

console.log(randomRange(1, 10));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.ceil('23.9'));

console.log(Math.floor(20.3));
console.log(Math.floor(20.9));
console.log(Math.floor('20.9'));

console.log(Math.round(3.3));
console.log(Math.round(3.9));
console.log(Math.round('3.9'));

console.log(Math.trunc(-30.3)); // -30
console.log(Math.floor(-30.3)); // -31 Jonas recommends using floor rather than the trunc method.

// Rounding Decimals
// the number gets converted to a string with this method.

console.log((2.7).toFixed(0)); 
console.log((2.7).toFixed(3)); 
console.log((2.345).toFixed(2)); 
console.log(+(2.345).toFixed(2)); // the '+' is the same as doing Number(2.345). It converts it to a number
*/

/*
/// Remainder operator

console.log(5 % 2); // 1. The remainder is the number lef over in a division before going into decimals.
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

// check for an even number
console.log(6 % 2); // 0 This is an even number
console.log(7 % 2); // 1 This is an uneven number

const isEven = n => n % 2 === 0;
console.log(isEven(5)); // false
console.log(isEven(8)); // true

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'LightGray';
    } else {
      row.style.backgroundColor = 'LightBlue';
    };
  });
});
*/
/*
//// BigInt

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// js can't do precise calculation with numbers greater than these.
// We use BigInt for larger numbers

console.log(BigInt(123456789012345678901234567890));
// creates a big int numbrer with an n at the end.

console.log(10000n + 10000n); // 20000n
// can't mix big int with regular numbers though

const huge = 123456789012345678901234567890n;
const num = 23;
// console.log(huge * num); // Uncaught TypeError: Cannot mix BigInt with other types, use explicit conversions

console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log( 20n == 20); // true
console.log( 20n == '20'); // true

console.log( huge + ' is REALLY BIG!!!'); // it gets coerced to a string.

//----  BigInt doesn't work with Math operators
// console.log(Math.sqrt(16n)); // Uncaught TypeError: Cannot convert a BigInt value to a number at Math.sqrt

console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333
*/

/*
//// Dates

const now = new Date();

console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
// month in java script is 0 base. 10 is November.
console.log(new Date(2037, 10, 31));
// Because there is no November 31st javascript auto corrects to December 1st.

console.log('-----------');
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);


console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142282180000));
console.log(Date.now()); // returns a time stamp

future.setFullYear(2040);
console.log(future);
*/

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
// console.log(Number(future));

// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);;

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

// for more specific dates and to include daylight savings use library moment.js instead


