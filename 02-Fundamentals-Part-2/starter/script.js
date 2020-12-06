'use strict'; // points us to errors
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

Strict mode reseved words:
const interface = 'Audio';
const private = 534;
const if = 23;

function logger() {
  console.log('My name is Jonas'); // funtion body
}
// calling, running or invoking the function.
logger(); 

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} organges`
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declaration

const age1 = calcAge1(2005);

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age2 = calcAge2(2005);
console.log(age1, age2);
*/

// Arrow Function. 
let year = new Date().getFullYear();

const calcAge3 = birthYear => year - birthYear;
console.log(calcAge3(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = year - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} will be 65 in ${retirement} years`
}

console.log(yearsUntilRetirement(1972, 'Nico')); // returns: Nico will be 65 in 17 years
console.log(yearsUntilRetirement(2004, 'Noelle')); // returns: Noelle will be 65 in 49 years
