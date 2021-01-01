'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var variables are function scoped

      // Creating New variable with the same name as outer scope's variable.
      const firstName = 'Steven';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable.
      output = 'NEW OUTPUT';
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow); // undefined
// console.log(addArrow(2, 3));

function addDec(a, b) {
  return a + b;
} // works because it's a function declaration

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // executes because !numProducts is 'undefined' at this stage

var numProducts = 10; // avoid using 'var' and declare variables on top

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge(); // 'this' keyword will point to the object calling the method. The 'this' keyword is dynamic

const f = jonas.calcAge;
// f();
// returns undefined because property 'year' is undefined

/* 
calling f in the console displays

ƒ () {
  console.log(this);
  console.log(2037 - this.year);
}
*/
