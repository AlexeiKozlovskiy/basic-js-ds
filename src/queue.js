const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    this.queue = new ListNode();
    this.end = null;
  }

  getUnderlyingList() {
    return this.queue;
  }
  enqueue(value) {
    if (this.queue.value === undefined) {
      this.queue = new ListNode(value);
      this.end = this.queue;
    } else {
      this.end.next = new ListNode(value);
      this.end = this.end.next;
    }
  }
  dequeue() {
    const currentOldValue = this.queue.value;
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return currentOldValue;

  }
};

module.exports = {
  Queue
};
