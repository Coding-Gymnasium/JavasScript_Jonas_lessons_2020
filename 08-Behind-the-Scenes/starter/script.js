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

/*
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

// var firstName = 'Matilda'; // one shouldn't use var.

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`), // one shouldn't use an arrow function as a method.
// };

// jonas.greet(); // returns 'Hey undefined' because this is used in an arrow function and that makes it use the this keyword from the global scope - undefined in this case. When added "var firstName = 'Matilda'" it uses Matilda for firstName

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

/*
// jonas.greet();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // // Solution #1

    //   const self = this;
    //   const isMillenial = function () {
    //     // console.log(this);
    //     console.log(self); // self or that
    //     // console.log(this.year >= 1981 && this.year <= 1996);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // Solution 2
    const isMillenial = () => {
      // this arrow function uses the 'this' keyword from the parent scope.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {  // arrow function don't have the arguments keyword
//   console.log(arguments);
//   a + b;
// };
// addArrow(2, 5, 8);
*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);
