'use strict'

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}. You were born in ${birthYear}`;
    console.log(output);
    
    if(birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);
    } else {
      var millenial = false;
      const firstName = 'Martin'; // takes prescedence over the same variable in the outter scope. They can have the same name because they are in different scopes.
      const str = `hm, you are definitely not a millenial ${firstName}`;
      console.log(str);

      function add(a, b){
        return a + b;
      }

      output = 'NEW OUTPUT'; // reassigning outter scope variable
    }
    console.log(millenial); // can be accessed because of var
    // add(2, 3); // out of scope while in strict mode
    console.log(output); // changes the original output variable because it is within scope.

  }
  printAge();
  return age;
};

const firstName = 'Nico';
calcAge(1972);

