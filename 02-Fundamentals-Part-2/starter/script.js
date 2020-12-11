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


// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [ 'Michael', 'Steven', 'Peter' ];
console.log(friends);

const years = new Array(1991, 1884, 2008, 2020);

console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

console.log(friend1); // still Michael

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2020 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years1)); // returns NaN
// console.log(calcAge(years1[0]));

for (let i = 0; i < years1.length; i++) {
  console.log(calcAge(years1[i]));
}

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength); // using .push(arg) returns the new array lenght

friends.unshift('John');
console.log(friends);

// Remove elements

friends.pop(); // removes the last element in the array
const popped = friends.pop(); // the removed element can be saved to a variable
console.log(friends);
console.log(popped);

friends.shift() // removes the first element
console.log(friends);

console.log(friends.indexOf('Steven')); // returns the index for the element 'Steve'

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

const friend = 'Steven'
if (friends.includes(friend)) {
  console.log(`You have a friends called ${friend}`);
} else {
  console.log('No such a friend');
}
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44

Hint: 
Remember that an array needs a value in each position, and that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀

// function calcTip(billValue) {
//   if(billValue >= 50 && billValue <= 300) {
//     return billValue * .15
//   } else {
//     return billValue * .20
//   }
// }

// Using Terniary
// function calcTip(billValue) {
//   return billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .20;
// }

// Using Arrow Function 
const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .20;
console.log(calcTip(50));

const bills = new Array(125, 555, 44);
const tips = []

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(tips);

const total = [];
for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + tips[i]);
}
console.log(total);

// Objects

const jonas = {
  firstName: 'Jonas',
  lastName: "Schmedtmann",
  age: new Date().getFullYear() - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}
// the above object 'jonas' has 5 properties. Each of them a key/value pair
console.log(jonas);

console.log(jonas.age);
console.log(jonas.firstName);
console.log(jonas.lastName);
console.log(jonas.job);
console.log(jonas.friends);

console.log(jonas['firstName']);
console.log(jonas['lastName']);
console.log(jonas['age']);
console.log(jonas['job']);
console.log(jonas['friends']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is ${jonas.friends[0]}`);


const jonas = {
  firstName: 'Jonas',
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // }
  // calcAge: function () {
  //   return new Date().getFullYear() - this.birthYear; // 'this' is equivalent to 'self' in ruby
  // }
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age; // we store it to a new property. In this case 'age'
  },
  summary: function() {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and has ${this.hasDriversLicense ? "a" : "no"} driver's license`
  }
}
// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas.age);

// challenge
// "Jonas is a 29-year old teacher and he has a drivers license"
console.log(jonas.summary());

function getSummary(name) {
  return `${name.firstName} is a ${name.age}-years old ${name.job} and has ${name.hasDriversLicense ? "a" : "no"} driver's license`
}
console.log(getSummary(jonas));
*/

/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (thesame method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: 
Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
console.log(mark.fullName);
console.log(mark.mass);
console.log(mark.height);
mark.calcBMI();
console.log(mark.bmi);
console.log(john.fullName);
console.log(john.mass);
console.log(john.height);
john.calcBMI();
console.log(john.bmi);
*/

// For loop
// for loop keeps running while the condition is true
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}
