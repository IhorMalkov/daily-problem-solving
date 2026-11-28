class ListNode {    
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const headA = new ListNode(4);
const headB = new ListNode(5);
const headC = new ListNode(6);
const headD = new ListNode(7);
const headE = new ListNode(8);
const headF = new ListNode(9);
const headG = new ListNode(10);

headA.next = headB;
headB.next = headC;
headC.next = headD;
headD.next = headE;
headE.next = headF;
headF.next = headG;

headB.next = headC;
headC.next = headD;
headD.next = headE;
var getIntersectionNode = function (headA, headB) {
  let lista = headA;
  let listb = headB;

  while (lista !== listb) {
    lista = lista ? lista.next : headB;
    listb = listb ? listb.next : headA;
  }

  return lista;
};

console.log(getIntersectionNode(headA, headB));