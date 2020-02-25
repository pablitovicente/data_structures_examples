const Node = require('./node');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Add to the end of the list
  push(object) {
    const node = new Node(object);
    // this is the edge case when the list is empty
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length += 1;

      return this;
    }

    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return this;
  }

  // Print each node in the list
  traverse() {
    let current = this.head;
    let depth = 1;
    while (current) {
      console.log(`${'  '.repeat(depth)} ${current.value}`);
      current = current.next;
      depth += 1;
    }
  }

  // Extract the last element of the list
  pop() {
    if (!this.head) return undefined;
    // Keep two pointers
    let current = this.head;
    let prev = current;
    // Find the end of the list
    while (current.next) {
      prev = current;
      current = current.next;
    }
    // Make the second to last the tail
    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;
    // if last item was popped reset the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // Extract the first element of the list
  shift() {
    if (!this.head) return undefined;

    const { head } = this;
    this.head = head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  // Add one element at the beginning of the list
  unshift(object) {
    const node = new Node(object);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  // Get one element of the list given the position
  get(index) {
    if (index < 0 || index >= this.length) return null; 

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }
}

module.exports = SinglyLinkedList;
