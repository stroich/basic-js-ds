const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.first =null;
    this.last = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if(this.length===0){
      this.last = new ListNode(value);
      this.first = this.last;
    }else{
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    }
    this.length+=1;
  }

  dequeue() {
    let remote = this.first;
    this.first = this.first.next;
    return remote.value;
  }
}

module.exports = {
  Queue
};
