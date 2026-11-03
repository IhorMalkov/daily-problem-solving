function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

var swapPairs = function (head) {

  let dummy = new ListNode(0, head);
  let prev = dummy,
    cur = head;

  while (cur && cur.next) {
    let npn = cur.next.next;
    let second = cur.next;

    second.next = cur;
    cur.next = npn;
    prev.next = second;

    prev = cur;
    cur = npn;
  }

  return dummy.next;
};

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));