const SinglyLinkedList = require('./singly_linked_list');

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList
  .push('Floor 1')
  .push('Floor 2')
  .push('Floor 5')
  .push('Floor 10')
  .push('Floor 12')
  .push('Floor 18')
  .push('Terrace!');

console.log(JSON.stringify(singlyLinkedList.head, null, 2));

singlyLinkedList.traverse();

singlyLinkedList.unshift('Ground Floor');

console.log(singlyLinkedList.get(3).value);

console.log(JSON.stringify(singlyLinkedList.head, null, 2));

console.log(singlyLinkedList.pop());

console.log(singlyLinkedList.shift());

console.log(JSON.stringify(singlyLinkedList.head, null, 2));
