'use strict';

const bookings = [];

const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers
) {
 //  ES5 way to set defaults:
 //  numPassengers = numPassengers || 1;
 //  price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123',5);
createBooking('LH123',undefined, 1000); // a parameter can't be skipped. Use undifined instead.

