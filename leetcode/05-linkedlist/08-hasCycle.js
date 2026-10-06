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

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

console.log((hasCycle(createList([[3, 2, 0, -4]]))));