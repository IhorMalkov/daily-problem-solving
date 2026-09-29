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

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;

  return dummy.next;
};

let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

let result = mergeTwoLists(list1, list2);

function printList(head) {
  let values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  console.log(values);
}

printList((result))