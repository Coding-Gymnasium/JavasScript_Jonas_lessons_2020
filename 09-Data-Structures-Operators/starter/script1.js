'use strict';

const  openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // Pre ES6 way
  openingHours, // ES6 way.
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // ES6 syntax
  },
  //order: function(starterIndex, mainIndex){
  //  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //}, Pre ES6 syntax

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////
///////////////////////////////////////////
// String Part 3
// Split

const arr = 'a+very+nice+string'.split('+');
console.log(arr);
console.log(arr.join(' '));

console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('_');
console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = [];
// 
//   for(const n of names){
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   return namesUpper.join(' ');
// };

const capitalizeName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];

  names.forEach( (name) => namesUpper.push( name[0].replace(name[0], name[0].toUpperCase()) + name.slice(1)));
  return namesUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
  // const str = number + '';
  const str = number.toString();
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4354656576768787));
console.log(maskCreditCard('4354656576768787'));

// Repeat
const message2 = 'Bad weather... All departures delayed ';
console.log(message2.repeat(5));

const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(10);


/*
// Strings Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'jOnAS'; 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate')); // With regex
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Airbus'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the new airbus family');
};

// Practice exercise
//
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(airline.length); // 16

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10

console.log(airline.indexOf('Portugal')); // 8
console.log(airline.slice(4)); // specifiies the begin parameter (index) => Air Portugal
console.log(airline.slice(4, 7)); // index 7 is the stop parameter => Air

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -2)); // AP Air Portuga

const checkMiddleSeat = function(seat) {
  // B and E are middle seats.
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') {
    console.log('You got the middle seat')
  } else {
    console.log('You got lucky');
  };
};

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice());
*/

/*
const question = new Map([
  ['question', 'What is the best language'], [1, 'C'], [2, 'Java'], [3, 'Javascript'], ['correct', 3], [true, 'Correct'], [false, 'Try again']
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  };
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

//// Convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = new Date();
const currentTime = time.getHours();
console.log(rest.get(currentTime > rest.get('open') && currentTime < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size); // 7
rest.clear(); // clears everything from the map.
console.log(rest);

// Objects can be used as keys
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

/*
// Sets

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza']);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Rissoto"}

console.log(new Set('Jonas')); // Set(5) {"J", "o", "n", "a", "s"} 

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) {"Pasta", "Pizza", "Rissoto", "Garlic Bread"}
ordersSet.delete('Rissoto');
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}
// ordersSet.clear(); // Set(0) {}

for(const order of ordersSet) console.log(order);

// Example. Use sets to remove duplicates from an array.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique); //Set(3) {"Waiter", "Chef", "Manager"}
const staffUnique1 = [...new Set(staff)];;
console.log(staffUnique1); // (3) ["Waiter", "Chef", "Manager"]

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('jonasschmedtmann').size);
*/

/*
// Property Names

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);

// [key, value]
for(const [key, {open, close}]  of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
if( restaurant.openingHours && restaurant.openingHours.mon) {
console.log(restaurant.openingHours.mon.open);
};

// With optional chaining
console.log(restaurant.openingHours.mon?.open); // the question mark acts as a conditional. This is ES6 syntax.
console.log(restaurant.openingHours?.fri?.open);

// Example
const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of weekday) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On${day}, we open at ${open}`);
};

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
// For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(item);
}; // to obtain the index for each item. Returns an array with [index, element]

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
};


for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}; // using destructuring
*/

/*
// Nullish coalescent operator '??'

restaurant.numbGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined ( Not 0 or '')
const guestCorrect = restaurant.numbGuests ?? 10;
console.log(guestCorrect); // 0
*/

/*
// Short Circuiting (&& and ||)

// '||' operator
// use ANY data type, return any data type, short-circuiting.
console.log( 3 || 'Jonas'); // 3
console.log( '' || 'Jonas'); // Jonas
console.log( true || 0); // true
console.log( undefined || null) // null
console.log( undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// restaurant.numGuests = 23;
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10
console.log(guests2); // 10 because 0 is a falsy value.

// '&&' operator
console.log( 0 && 'Jonas'); // 0
console.log( 7 && 'Jonas'); // Jonas
console.log( 'Hello' && 23 && null && 'jonas'); // null
*/
/*
// Destructuring
// SPREAD because on RIGHT side of = (operator)
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'ham', 'cheese');

restaurant.orderPizza('ham');
*/

/*
// Spread Operator
const arr = [7, 9, 9];

const arrArr = [1, 2, arr] // returns arr inside the new array.
const newArr = [1, 2, ...arr] // spreads arr into the new array. [1,2,7,8,9]
console.log(newArr);

console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays, strings, maps, sets, NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// const ingredients =  [prompt(`Let's make pasta!  Ingredient 1?`),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3?'),
// ]; 
// 
// restaurant.orderPasta(...ingredients);

// Objects
// Spread operators works on objects too. Eventhough they are not iterable

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  startIndex: 1,
  address: 'Via del sole, 21',
});

const { name, openingHours, categories } = restaurant;

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;


// console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b:7, c: 14 };
({a, b} = obj); // must wrap between parenthesis
// console.log(a, b); // changes to 23, 7

//nested object
const { fri: { open, close } } = openingHours
// console.log(open, close)
*/

/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

const [first, , second] = restaurant.categories;// to hit the third item add empty space between commas.
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main]
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, ,[j, k]] = nested;
console.log(i,j,k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/


