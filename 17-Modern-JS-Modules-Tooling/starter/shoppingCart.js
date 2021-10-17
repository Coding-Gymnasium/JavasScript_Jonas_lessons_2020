console.log("I'm the shopping module");

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

const addTotal = () => {
  let initialValue = 0;
  let sum = cart.reduce((prevValue, curValue) => {
    return prevValue + curValue.quantity;
  }, initialValue);
  console.log(sum);
};

export default addTotal;

/**
 * Typically is not good practice to
 * mix name exports and default exports
 */
