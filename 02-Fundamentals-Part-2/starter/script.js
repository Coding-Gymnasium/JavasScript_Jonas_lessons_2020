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
*/

// Function Declaration

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age1 = calcAge1(2005);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age2 = calcAge2(2005);
console.log(age1, age2);