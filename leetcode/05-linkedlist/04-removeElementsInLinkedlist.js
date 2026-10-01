class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createList(arr) {
  let dummy = new ListNode();
  let curr = dummy;

  for (let value of arr) {
    curr.next = new ListNode(value);
    curr = curr.next;
  }

  return dummy.next;
}

function printList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
}

var removeElements = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;

  let curr = dummy;

  while (curr) {
    if (curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};

let list = createList([1, 2, 6, 3, 6]);

printList(removeElements(createList([1, 2, 6, 3, 6]), 6));