'use strict';

const Person = function(firstName, birthYear) {
  // console.log(this); // => Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;

//  // Bad practice. Don't create a method inside a constructor
//  this.calcAge = function() {
//    console.log(2037 - this.birthYear);
//  }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // => Person {firstName: "Jonas", birthYear: 1991}

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. Object linked to prototype
// 4. function automatically returns object

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // => true

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__=== Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); // the species property is in the __proto__
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

