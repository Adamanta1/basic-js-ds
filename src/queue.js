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
    //this.storage = {};
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) { // push
    //this.storage[this.tail] = value;
    //this.tail += 1;
    const node = new ListNode(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length += 1;
  }

  dequeue() { // shift
    //let firstElem = this.storage[this.head];
    //delete this.storage[this.head];
    //this.head += 1;
    //return firstElem;
    const first = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return first.value;
  }
}

// comments - a simple object queue without ListNodes

module.exports = {
  Queue
};
