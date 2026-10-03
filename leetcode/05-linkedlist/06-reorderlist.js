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

var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;
  let node = null;

  while (second) {
    let temp = second.next;
    second.next = node;
    node = second;
    second = temp;
  }

  let first = head;
  second = node;

  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};

let list = createList([1, 2, 3, 4]);

reorderList(list);

printList(list);