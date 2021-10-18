/*
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
*/

/**
 * Typically is not good practice to
 * mix name exports and default exports
 */

// ----- Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart and shipping cost is ${shippingCost}`
    );
  };

  const orderStock = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pear', 3);
