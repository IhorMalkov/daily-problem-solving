class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var reverseBetween = function (head, left, right) {
  if (!head || left === right) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let prev = dummy;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let cur = prev.next;

  for (let i = 0; i < right - left; i++) {
    const temp = cur.next;
    cur.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  return dummy.next;
};

console.log(reverseBetween(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2, 4));