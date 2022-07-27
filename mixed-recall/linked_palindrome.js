/*
Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.

test_00:
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3
linkedPalindrome(a); // true
test_01:
const a = new Node(3);
const b = new Node(2);
const c = new Node(4);

a.next = b;
b.next = c;

// 3 -> 2 -> 4
linkedPalindrome(a); // false
test_02:
const a = new Node(3);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

// 3 -> 2 -> 3
linkedPalindrome(a); // true
test_03:
const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(1);
const e = new Node(0);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 0 -> 1 -> 0 -> 1 -> 0
linkedPalindrome(a); // true
test_04:
const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(1);
const e = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 0 -> 1 -> 0 -> 1 -> 1
linkedPalindrome(a); // false
test_05:
const a = new Node(5);

// 5
linkedPalindrome(a); // true
test_06:
linkedPalindrome(null); // true
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

const linkedPalindrome = (head) => {
    let current = head;
    const valArray = [];

    while(current !== null){
        valArray.push(current.val);
        current = current.next;
    }
    return valArray.join('') === valArray.reverse().join('');
};

const linkedPalindrome2 = (head) => {
    let current = head;
    const valArray = [];

    while(current !== null){
        valArray.push(current.val);
        current = current.next;
    }

    for(let i = 0, j = valArray.length - 1; i <= Math.floor(valArray / 2); i++, j--){
        if(valArray[i] !== valArray[j]) return false;
    }
    return true;
}
