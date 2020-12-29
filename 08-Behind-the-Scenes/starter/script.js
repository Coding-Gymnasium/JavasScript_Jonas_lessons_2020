'use strict';

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

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
