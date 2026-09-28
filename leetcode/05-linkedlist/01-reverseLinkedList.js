var reverseList = function (head) {
  let node = null;

  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2]));