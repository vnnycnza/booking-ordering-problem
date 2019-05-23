/**
 * Booking.test.js
 * Unit Test for Bookings
 */

const chai = require('chai');
const expect = chai.expect;
const Bookings = require('../Bookings');

describe('Booking.js', function() {
  let sampleInput = [
    {
      "id": 1,
      "start": 3,
      "end": 1
    },
    {
      "id": 2,
      "start": 1,
      "end": 3
    },
    {
      "id": 3,
      "start": 3,
      "end": 1
    },
    {
      "id": 4,
      "start": 2,
      "end": 2
    },
    {
      "id": 5,
      "start": 3,
      "end": 1
    },
    {
      "id": 6,
      "start": 2,
      "end": 3
    },
    {
      "id": 7,
      "start": 1,
      "end": 3
    },
    {
      "id": 8,
      "start": 1,
      "end": 1
    },
    {
      "id": 9,
      "start": 3,
      "end": 3
    },
    {
      "id": 10,
      "start": 3,
      "end": 2
    }
  ];
  let bookings = new Bookings(sampleInput);

  context('constructor', function() {
    it('should instantiate Bookings object from given list',function() {
        expect(bookings).to.be.a('object');
        expect(bookings._initialList).to.be.an('array');
        expect(bookings._minRelocation).to.be.equal(0);
        expect(bookings._orderedList).to.be.an('array');
        expect(bookings._orderedList).to.deep.equal(bookings._initialList);
    });
  });

  context('getInitialList()', function() {
    it('should return initialList', function() {
        expect(bookings.getInitialList()).to.deep.equal(bookings._initialList);
    });
  });

  context('getMinRelocation()', function() {
    it('should return minRelocation', function() {
        expect(bookings.getMinRelocation()).to.deep.equal(bookings._minRelocation);
    });
  });

  context('getOrderedList()', function() {
    it('should return getOrderedList', function() {
        expect(bookings.getOrderedList()).to.deep.equal(bookings._orderedList);
    });
  });

  context('getBookingList()', function() {
    it('should return array of id of list', function() {
        expect(bookings.getBookingList(sampleInput)).to.be.an('array');
        expect(bookings.getBookingList(sampleInput)).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    });
  });

  context('setOrderedList()', function() {
    context('when initialList can be reordered', function() {
      let bkings = new Bookings(sampleInput);
      it('should reorder _orderedList and update _minRelocation', function() {
          bkings.setOrderedList();
          expect(bkings.getOrderedList()).to.not.deep.equal(bkings.getInitialList());
          expect(bkings.getMinRelocation()).to.not.equal(bkings._getRelocationCount(bkings.getInitialList()));
      });
    });
  });

  context('_formatList()', function() {
    it('should return formatted list', function() {
        let sample = [{"id": 1, "start": 3, "end": 1},{"id": 1, "start": 1, "end": 2},{"id": 1, "start": 3, "end": 4}];
        expect(bookings._formatList(sample)).to.be.an('string');
        expect(bookings._formatList(sample)).to.deep.equal('[3, 1],[1, 2],[3, 4]');
    });
  });
  
});