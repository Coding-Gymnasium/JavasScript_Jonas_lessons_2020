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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
  return juice;
}

console.log(fruitProcessor(2, 3));

const year = new Date().getFullYear();

const calcAge4 = function (year, birthYear) {
  return year - birthYear
};

const yearsUntilRetirement = function(birthYear, firstName) {
  const retirement = 65 - calcAge4(year, birthYear);

  if (retirement > 0) {
    return `${firstName} will be 65 in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
  
}

console.log(yearsUntilRetirement(2007, 'Aerin'));
console.log(yearsUntilRetirement(1944, 'Mama'));
*/

/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Createa function 'checkWinner' that takes the average score of each team as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
😉 GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => ( a+ b + c) / 3;
// console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23 ,71);
let scoreKoalas = calcAverage(65, 54 ,49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(100, 50);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);