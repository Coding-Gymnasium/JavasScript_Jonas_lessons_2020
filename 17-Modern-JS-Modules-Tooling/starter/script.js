// import * as ShoppingCart from './shoppingCart.js';
import quantitySum, * as ShoppingCart from './shoppingCart.js';
// import { addToCart, totalPrice as Price, tq } from './shoppingCart.js';
// import quantitySum from './shoppingCart.js';

// addToCart('bread', 5);

// console.log(tq, Price);
ShoppingCart.addToCart('rice', 10);
ShoppingCart.addToCart('bread', 15);
ShoppingCart.addToCart('banana', 35);

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

quantitySum(); // quantitySum is an alias for addtotal because the way I imported it.

console.log(ShoppingCart.cart);

/**
 * Typically is not good practice to 
 * mix name exports and default exports
 */
