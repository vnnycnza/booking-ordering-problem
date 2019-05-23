/**
 * Booking Ordering Problem  
 * SmoveChallenge
 */

const path = require('path');
const fs = require('fs');
const Bookings = require('./Bookings');

(function () {
  let inputFile = process.argv[2];
  let outputFile = process.argv[3];
  if (!inputFile || !outputFile) {
    console.log('JSON File Input & Output filepath is required');
    process.exit();
  }

  const input = require(path.resolve(__dirname, inputFile));
  const bookings = new Bookings(input);
  bookings.setOrderedList();

  const bookingIds = bookings.getBookingList(bookings.getOrderedList());
  fs.writeFileSync(outputFile, JSON.stringify(bookingIds));

  bookings.printAllDetails();
  process.exit();
})();