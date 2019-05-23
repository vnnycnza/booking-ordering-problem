/**
 * Bookings.js
 * Class for Booking methods
 */

class Bookings {
  constructor (list) {
    this._initialList = list.slice();
    this._minRelocation = 0;
    this._orderedList = list.slice();
  }

  getInitialList () {
    return this._initialList;
  }

  getMinRelocation () {
    return this._minRelocation;
  }

  setMinRelocation () {
    const count = this._getRelocationCount(this._orderedList);
    this._minRelocation = count;
  }

  getOrderedList () {
    return this._orderedList;
  }

  setOrderedList () {
    let list = this._initialList;
    let newList = [list[0]]; 

    for (let current = 1; current < this._initialList.length; current++) {
      let itemToCompare = this._initialList[current];
      newList.push(itemToCompare);
      let indexToMoveTo = -1;

      for (let preceedingCtr = current - 1; preceedingCtr > -1; preceedingCtr--) {
        let comparingTo = newList[preceedingCtr];

        if (itemToCompare.start === comparingTo.end) {
          if (preceedingCtr !== current - 1) {
            if (preceedingCtr < (newList.length - 1)) {
              let afterComparingTo = newList[preceedingCtr + 1];
              if (afterComparingTo.start === itemToCompare.end || afterComparingTo.start !== comparingTo.end) {
                indexToMoveTo = preceedingCtr + 1;
                break;
              }
            }
          }
        } 

        if (indexToMoveTo === -1 && itemToCompare.end === comparingTo.start) {
          if (preceedingCtr > 0) {
            let beforeComparingTo = newList[preceedingCtr - 1];
            if (beforeComparingTo.end === itemToCompare.start || beforeComparingTo.end !== comparingTo.start) {
              indexToMoveTo = preceedingCtr;
              break;
            }
          } else if (preceedingCtr === 0) {
            indexToMoveTo = preceedingCtr;
            break;
          }
        }
      }

      if (indexToMoveTo > -1) {
        let currentIndex = newList.indexOf(itemToCompare);
        newList = arrayMove(newList, currentIndex, indexToMoveTo);
      }
    }

    this._orderedList = newList.slice();
    this.setMinRelocation();
  }

  getBookingList(list) {
    return list.map((b) => b.id);
  }

  _getRelocationCount(list) {
    let count = 0;
    list.forEach((item, index) => {
      if (index !== list.length - 1 && (item.end !== list[index + 1].start)) {
        count++;
      }
    });
    return count;
  }

  _formatList(list) {
    return list.map((item) => {
      return `[${item.start}, ${item.end}]`;
    }).join();
  }

  printAllDetails() {
    console.log(`
    Booking Ordering Problem
    ============================================================
    Initial Booking List: ${this._formatList(this.getInitialList())}
    Ordered Booking List: ${this._formatList(this.getOrderedList())}
    Booking IDs: ${this.getBookingList(this.getOrderedList())}
    Minimum Relocations: ${this.getMinRelocation()}
    `);
  }
}

module.exports = Bookings;

function arrayMove(arr, oldIndex, newIndex) {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}