'use strict';
/*
/////------- Constructor Functions and the New Operator
const Person = function(firstName, birthYear) {
  // Instance Properties
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

Person.hey = function() {
  console.log('hey there 👋 😊');
  console.log(this);
};

Person.hey();
// this function is not inherited though


////------- Prototypes
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

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 5, 9, 9, 3]; // new array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// Extending the prototype is not a good idea but the one below serves as an example to show it can be done.
Array.prototype.unique = function() {
  return [...new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1) // to observe the object.
console.dir(x => x + 1);

///////////////////////////////////////
//----------------- Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function( make, speed) {
  this.make = make;
  this.speed = speed;
  }

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1);
console.log(car2);

Car.prototype.accelerate = function() {
  console.log(`${this.speed += 10} km/h`);
}

Car.prototype.break = function() {
  console.log(` ${this.speed -= 5} km/h`);
}

car1.accelerate();
car1.break();
*/

/*
//------------ Classes

//// Class expression
//const PersonCl = class {}

//// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

// Instance methods
  //// Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists

  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey There static 👋🏻');
//    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
//console.log(jessica);
jessica.calcAge();
//console.log(jessica.age);
//console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}` )
//   };

jessica.greet();

// 1. Classes are NOT hoisted.
// 2. Classes are first-class citizens.
// 3. Classes are executed in strict mode.

const walter = new PersonCl('Walter White', 1995);

PersonCl.hey();
*/

//------------ Getters and Setters
/*
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

////////------- Object Create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();


console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1970);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//------- Inheritance between Classes

//const Person = function(firstName, birthYear) {
//  this.firstName = firstName;
//  this.birthYear = birthYear;
//};
//
//Person.prototype.calcAge = function () {
//  console.log(2037 - this.birthYear);
//};

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Student and Person prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); // 17

console.log(mike.species);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function( make, speed) {
  this.make = make;
  this.speed = speed;
  }

Car.prototype.accelerate = function() {
  console.log(`${this.speed += 10} km/h`);
}

Car.prototype.break = function() {
  console.log(` ${this.speed -= 5} km/h`);
}

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();
*/
/*
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear}`);
    };
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce();
martha.calcAge();

*/

/*
//--------------------------------------------
  // Inheritance Between "Classes": Object.create
//--------------------------------------------

  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function() {
  console.log(`My name is ${this.fullName} and ( study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

  // 1) Public fields
  // 2) Private fields
  // 3) Public methods
  // 4) Private methods
  // (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods

  // Public interface
  getMovements() {
    return this.#movements;
  }


  deposit(val) {
    //this._movements.push(val)
    this.#movements.push(val)
    return this;
  }

  withdraw(val) {
    this.deposit(-val)
    return this;
  }


  requestLoan(val) {
    if(this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approvad');
      return this;
    }
  }

  static helper () {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
//acc1._movements.push(240);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());

//console.log(acc1.#movements);
//console.log(acc1.#pin);
Account.helper();
