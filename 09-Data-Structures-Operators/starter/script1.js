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


