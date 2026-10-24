class ListNode {
        constructor(val, next) {
            this.val = val;
            this.next = null;
     }
}

let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1), null)));

var isPalindrome = function (head) {
  let curr = head;

  let palindrom = function (head) {
    if (head === null) {
      return true;
    }
    let ans = palindrom(head.next) && head.val === curr.val;
    curr = curr.next;
    return ans;
  };

  return palindrom(head);
};

console.log(isPalindrome(head));