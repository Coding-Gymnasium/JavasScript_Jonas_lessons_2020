'use strict';

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesn't work
// book(23, 'Sarah Williams');

// Call Method
// using call method to set the 'this' keyword.
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Apply Method
// takes an array of arguments. Not as common
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// In modern javaScript we can also use an array with the call method if we use the spread operator
book.call(eurowings, ...flightData);

// Bind Method

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
const bookLH = book.bind(lufthansa);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nico Rithner');
bookEW23('Liz');

// with Event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes++);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
//
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23);
// same as writing:
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

/*
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// same as above but with arrow functions. Shorter but maybe not as readable as the one above.
const greet = greeting =>  name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// the above is the same as this:
greet('Hello')('Jonas');
*/

/*
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function (it takes a function)
const transformer = function(str, fn) {
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
  console.log('👋🏻');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 24739479284) {
    alert('Checked in')
  } else {
    alert('Wrong Passport');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
const bookings = [];

const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers
) {
 //  ES5 way to set defaults:
 //  numPassengers = numPassengers || 1;
 //  price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123',5);
createBooking('LH123',undefined, 1000); // a parameter can't be skipped. Use undifined instead.
*/
