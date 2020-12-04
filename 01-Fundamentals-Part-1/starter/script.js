/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer'; //not descriptive, allowed but not best practice.

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // can't redifine a const declaration

// const job; // can't use const on an empty variable

var job = 'programmer'; // 'var' is from pre ES6. Don't use 'var'
job = 'teacher';

lastName = 'Schmedtmann'; //Not declaring a variable makes it global and is generally not a good practice.
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 **3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Scmedtmann';
console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 100
x --; // x = x - 1 = 99
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // true
// other operators: >, <, >=, <=

console.log(ageSarah >= 18); //true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25-10-5;
console.log(x, y);

const averageAge =  (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. StoreMark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


//Data 1
const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;


marksBMI = (marksWeight / marksHeight ** 2).toFixed(2)
johnsBMI = (johnsWeight / johnsHeight ** 2).toFixed(2)
console.log(marksBMI, johnsBMI);

markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

//Data 2
const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnsWeight2 = 85;
const johnsHeight2 = 1.76;

marksBMI = (marksWeight2 / marksHeight2 ** 2).toFixed(2)
johnsBMI = (johnsWeight2 / johnsHeight2 ** 2).toFixed(2)
console.log(marksBMI, johnsBMI);

markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// old way to write a string:
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + "!";
console.log(jonas);
// template literal, ES6 way
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`); // back ticks are good for writing strings.

console.log("String with \n\
multiple \n\
lines:");

console.log(`String
multiple
lines`); // back ticks (template literals) can be use for multiline strings as well.

// If/else control structure

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsleft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsleft} years.`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = `20th century`;
} else {
  century = `21st century`;
}

console.log(century);
*/

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
😉 GOOD LUCK 😀
*/

/*
const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 92;
const johnsHeight = 1.95;

marksBMI = (marksWeight / marksHeight ** 2).toFixed(2)
johnsBMI = (johnsWeight / johnsHeight ** 2).toFixed(2)

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})!`)
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`)
}


// type conversion

const inputYear = `1991`;
console.log(inputYear);
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`)); // output is NaN (not a number: invalid number)
console.log(typeof NaN);

console.log(String(23)); // converts to a string

// type coercion

console.log("I am " + 23 + " years old"); // javascript automatically converts the number to a string.
console.log('23' - '10' - 3); // converts the strings to numbers when there is a '-' operator. 
console.log('23' + '10' + 3); // concatenates when there is '+' operator.
console.log('23' * '2'); // converts the strings to numbers when there is a '*' operator.
console.log('23' / '2'); // converts the strings to numbers when there is a '/' operator.
console.log('23' > '2'); // converts the strings to numbers when there is a '>' operator.


// 5 falsy values: 0, '', undefined, null, NaN
// the syntax below is just to illustrate
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if(money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a job!");
}

let height = 0;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log(('Height is UNDEFINED'));
}

const age = 18;

if (age === 18) console.log('You just became an adult 🤪'); //strict

if (age == '18') console.log('You just became an adult 😜'); //loose

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('Cool! 7 is also a cool number!');
} else if (favorite === 9) {
  console.log('Cool! 9 is also a cool number!');
} else {
  console.log('Number is neither 23, 7 nor 9');
};

if (favorite !== 23) console.log(('Why not 23?'));


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); 

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired); 

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console.Don't forget that there can be a draw, so test for that
as well(draw means they have the same average score)

3. Bonus1: Include a requirement for a minimum score of 100.With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks 😉

4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy

Test data:

§ Data 1: 
Dolphins score 96, 108 and 89. 
Koalas score 88, 91 and 110

§ Data Bonus 1: 
Dolphins score 97, 112 and 101. 
Koalas score 109, 95 and 123 § 

Data Bonus 2: 
Dolphins score 97, 112 and 101. 
Koalas score 109, 95 and 106

GOOD LUCK 😀

// #1

// data 1
const dolphins_average = ((96 + 108 + 89) / 3) 
const koalas_average = ((88 + 91 + 110) / 3)

// data 2
const dolphins_average1 = ((97 + 112 + 101) / 3)
const koalas_average1 = ((109 + 95 + 123) / 3)

// data 3
const dolphins_average2 = ((97 + 112 + 101) / 3)
const koalas_average2 = ((109 + 95 + 106) / 3)

// #2

if (dolphins_average > koalas_average && dolphins_average >= 100) {
  console.log(`Dolphins win! ${dolphins_average.toFixed(2)} to ${koalas_average.toFixed(2)}`);
} else if (dolphins_average < koalas_average && koalas_average >= 100) {
  console.log(`Koalas win! ${koalas_average.toFixed(2)} to ${dolphins_average.toFixed(2)}`);
} else if (dolphins_average === koalas_average && dolphins_average >= 100 && koalas_average >= 100) {
  console.log(`It's a tie! ${koalas_average.toFixed(2)} - ${dolphins_average.toFixed(2)}`);
} else {
  console.log('No one wins ☹️')
}

if (dolphins_average1 >= koalas_average1 && dolphins_average1 >= 100) {
  console.log(`Dolphins win! ${dolphins_average1.toFixed(2)} to ${koalas_average1.toFixed(2)}`);
} else if (dolphins_average1 < koalas_average1 && koalas_average1 >= 100) {
  console.log(`Koalas win! ${koalas_average1.toFixed(2)} to ${dolphins_average1.toFixed(2)}`);
} else if (dolphins_average1 === koalas_average1 && dolphins_average1 >= 100 && koalas_average1 >= 100) {
  console.log(`It's a tie! ${koalas_average1.toFixed(2)} - ${dolphins_average1.toFixed(2)}`);
} else {
  console.log('No one wins ☹️')
}

if (dolphins_average2 >= koalas_average2 && dolphins_average2 >= 100) {
  console.log(`Dolphins win! ${dolphins_average2.toFixed(2)} to ${koalas_average2.toFixed(2)}`);
} else if (dolphins_average2 < koalas_average2 && koalas_average2 >= 100) {
  console.log(`Koalas win! ${koalas_average2.toFixed(2)} to ${dolphins_average2.toFixed(2)}`);
} else if (dolphins_average2 === koalas_average2 && dolphins_average2 >= 100 && koalas_average2 >= 100) {
  console.log(`It's a tie! ${koalas_average2.toFixed(2)} - ${dolphins_average2.toFixed(2)}`);
} else {
  console.log('No one wins 😭')
}

const day = 'thursday'

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code example');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
    break;
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
    break;
}

// statements and expressions
3 + 4
1991
true && false && !false

if(23 > 10) {
  const str = '23 is bigger';
}

// Ternary
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);


// Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip,depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:

§ Data 1: 
Test for bill values 275, 40 and 430 

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

GOOD LUCK 😀
*/

const bill_1 = 275;
const bill_2 = 40;
const bill_3 = 430;

let tip;
bill_1 >= 50 && bill_1 <= 300 ? tip = (bill_1 * 0.15) : tip = ((bill_1 * 0.2));

console.log(`The bill was $${bill_1}, the tip was $${tip}, and the total value $${bill_1 + tip}`);