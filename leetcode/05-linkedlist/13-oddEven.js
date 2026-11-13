class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
console.log(oddEvenList(node1));