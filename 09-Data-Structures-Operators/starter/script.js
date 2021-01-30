'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours;
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*
// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days a week, on: `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values

const values = Object.values(openingHours);
console.log(values);

// Entire object

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/*
/////////////////
// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining

console.log(restaurant.openingHours.mon?.open); // if mon doesn't exist we get 'undefined'
console.log(restaurant.openingHours?.mon?.open); // if openingHours doesn't exist we get 'undefined'

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // '??' is the knowledge coalescing operator
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? ' Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? ' Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0].name ?? 'User array empty'); // Jonas

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty'); // Jonas

/*
//////////////////////////////////////
// For Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// } // each item will print as an array with the index and name as elements

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); // 1: Focaccia, etc
}

// with deconstruction
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // 1: Focaccia, etc
}

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined ( NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
////////////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting (short circuit evaluation)
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns 'Hello' because is the first one to be truth so it short-circuits the evaluation

// restaurant.numGuests = 0; // a falsy value
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas'); // returns 'Hello' because is the first one to be truth so it short-circuits the evaluation

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
//// Rest pattern and parameters
//// spread operator unpacks elements from an array, while Rest packs elements into an array

//// 1) Destructuring:
//// SPREAD, because on the RIGHT side of = sign
const arr = [1, 2, ...[3, 4]];

//// REST, because on the LEFT side of the equal sign
const [a, b, ...others] = [1, 2, 3, 4, 5]; // in this case collects the unused elements in the destructuring assigment
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  // rest element must be the last element and there can be only one
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST pattern with objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // with spread we unpack the values

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms (3) ["onion", "olives", "spinach"]
restaurant.orderPizza('mushrooms'); // mushrooms []

/*
///////////////////////////////////////////
// spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // bad way to do it
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnochi']; // builds a new array from scratch. #=> ["Pizza", "Pasta", "Risotto", "Gnochi"]
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //  ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

// Iterables: array, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]

/* Commented out TEMPORARILY to mute the prompts

const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]) // inefficient way
// with spread operator:
restaurant.orderPasta(...ingredients); // here is your delicious pasta with tomato, cheese and ham
*/
/*
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
/*
restaurant.oderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delieverd to Via del Sole, 21 at 22:30

restaurant.oderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}); // Order received! Garlic Bread and Pizza will be delieverd to Via del Sole, 21 at 20:00

const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/*
///////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria
const [first, , second] = restaurant.categories;
console.log(first, second); // Italian Vegeterian

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 more likely to win');
team1 > team2 && console.log('Team 2 more likely to win');
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
// 1. SOLVED
const scoringPlayers = Object.values(game.scored);

for (let index = 0; index < scoringPlayers.length; index++) {
  console.log(`Goal ${index + 1}: ${scoringPlayers[index]}`);
}
// Jonas Solution
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}`);

// 2. SOlVED
const odds = Object.values(game.odds);
let sum = 0;
for (let index = 0; index < odds.length; index++) {
  sum += odds[index];
}
const oddsAverage = Math.floor(sum / odds.length);
console.log(oddsAverage);
// Jonas Solution

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
// teams are the first two elements of the object

const teams = {
  team1: game.team1,
  team2: game.team2,
  x: 'Draw',
};
console.log(teams);

for (const [key, value] of Object.entries(teams)) {
  console.log(`${key}: ${value}`);
}
for (const [key, value] of Object.entries(game.odds)) {
  console.log(`${key}: ${value}`);
}

// Jonas Solution

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

// New javaScript data structures

////////////////////////////////////
// Sets

/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // > Set(3) {"Pasta", "Pizza", "Risotto"}

console.log(new Set('Jonas')); // > Set(5) {"J", "o", "n", "a", "s"}

console.log(ordersSet.size); // > 3
console.log(ordersSet.has('Pizza')); // > true
console.log(ordersSet.has('Bread')); // > false
ordersSet.add('Garlic Bread');
console.log(ordersSet); // > Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
ordersSet.delete('Risotto');
console.log(ordersSet); // > Set(4) {"Pasta", "Pizza", "Garlic Bread"}

console.log(ordersSet[0]); // doesn't work. It's 'undefined'

// ordersSet.clear(); // > Set(0) {}
// console.log(ordersSet);

// sets are iterables
for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// we want a set with unique elements
const staffUnique = new Set(staff);
console.log(staffUnique); // > Set(3) {"Waiter", "Chef", "Manager"}

// if we want an array
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray); // > (3) ["Waiter", "Chef", "Manager"]

// to know the size
console.log(new Set(staff).size); // 3

console.log(new Set('Nicolas').size); // 7
*/
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([question.entries()]);
console.log([...question.keys()]); //  ["question", 1, 2, 3, "correct", true, false]
console.log([...question.values()]); // ["What is the best programming language in the world?", "C", "Java", "JavaScript", 3, "Correct 🎉", "Try again!"]
*/
/*
///////////////////////////
// Maps fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal')); //> Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // true
console.log(rest.get(1)); // 'Firenze, Italy'

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open

console.log(rest.has('categories')); // true
rest.delete(2);
console.log(rest); // location 2 is gone
console.log(rest.size); // 7

rest.set([1, 2], 'Test'); // using the array as the key and the string as the value. However we can't call the key [1,2] because is an object. We could use it if we assing it, for example: const arr = [1, 2]; rest.set(arr, 'Test'). Now if we call arr we get 'Test'

const arr1 = [1, 2];
rest.set(arr1, 'Test1');
console.log(rest.get(arr1));

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10 (the 'r' in Portugal)
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1 because it doesn't exist

console.log(airline.slice(4)); // 4 is the position where the slice starts. We get the substring Air Portugal. The original string remains intact.

console.log(airline.slice(4, 7)); // Air. 4 is the beggining index and 7 the stop. It doesn't include index 7

console.log(airline.slice(0, airline.indexOf(' '))); // Tap
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1)); // Tap Air

console.log(airline.slice(-2)); // al
console.log(airline.slice(8, -2)); // Portug

// Example
const checkMiddleSeat = function (seat) {
  // B and E aer middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky! 😎');
};

checkMiddleSeat('11B'); // You got the middle seat 😬
checkMiddleSeat('32C'); // You got lucky! 😎
checkMiddleSeat('3E'); // You got the middle seat 😬

// Whe we use methods on a String javaScript converts it behind the scenes into an array and the run the methods on that.
console.log(new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));
*/
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'JonAS'; // should be Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const passengerCorrectFunction = name => {
  const nameLower = name.toLowerCase();
  const nameFix = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameFix);
};

passengerCorrectFunction('NIco');
passengerCorrectFunction('ELIZabeth');

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); // 'hello@jonas.io';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // 'hello@jonas.io';
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97￡';
const priceUS = priceGB.replace('￡', '$').replace(',', '.');
console.log(priceUS);

const announcement = ' All passengers come to boarding door 23. Boarding door 23!'.trimStart();
console.log(announcement.replaceAll('door', 'Gate'));

// or using a regular expression
console.log(announcement.replace(/door/g, 'Gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // false
console.log(plane.startsWith('A')); // true

const plane1 = 'Airbus A320neo';
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+'));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4334544565567667));

// Reapeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(15);
planesInLine(3);
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel74399980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FA) to TXL (11h25)
// .............Arrival from Bru to FAO (11h45)
// ...🔴 Delayed Arrival from HEL to FAO (12h05)
// ............Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
	const [type, from, to, time] = flight.split(';');
	const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from  ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(46);
	console.log(output);
}


