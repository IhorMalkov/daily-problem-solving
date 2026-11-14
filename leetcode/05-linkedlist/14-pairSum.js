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

var pairSum = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;

  while (slow) {
    let nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let ans = 0;
  let first = head;
  let second = prev;

  while (second) {
    ans = Math.max(ans, first.val + second.val);
    first = first.next;
    second = second.next;
  }

  return ans;
};

console.log(pairSum(node1));