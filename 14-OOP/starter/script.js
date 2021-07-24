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
