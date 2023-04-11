// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let listPointer = l;

  let newList;
  let newListPointer;

  do {
    const item = listPointer.value === k ? newListPointer : listPointer;
    newList = newList || item;
    newListPointer = newListPointer || newList;

    if (item !== newListPointer) {
      newListPointer.next = item;
      newListPointer = newListPointer.next;
    }
  } while ((listPointer = listPointer.next))

  newListPointer.next = null;

  return newList;
}

module.exports = {
  removeKFromList
};
