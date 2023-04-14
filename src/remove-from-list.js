const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {*[]}
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
  let list = new ListNode(0);
  function createList(list,l,k){
    if(l.value!==k){
      if(l.next===null || (l.next.next==null && l.next.value===k)){
        list.value = l.value;
      }else{
        let element =new ListNode(0);
        list.value = l.value;
        list.next = element;
      }
      if (l.next) {
        createList(list.next, l.next, k);
      }
    }else {
      if (l.next) {
        createList(list, l.next, k);
      }
    }
    return list;
  }
  let result = createList(list, l,k);
  return result;

}

module.exports = {
  removeKFromList
};
