/*
Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d

linkedListCycle(a);  // true
test_01:
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u

linkedListCycle(q);  // true
test_02
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListCycle(a);  // false
test_03:
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = t; // cycle

//                   __
//                 /   \
// q -> r -> s -> t -> u

linkedListCycle(q);  // true
test_04:
const p = new Node('p');

// p

linkedListCycle(p); // false
test_05:
linkedListCycle(null); // false
*/

// check if linked list has a cycle
const linkedListCycle = (head) => {
    let current = head;
    const visited = new Set();

    while(curr !== null) {
        if(visited.has(curr)) return true;
        visited.add(curr.val);
        curr = curr.next;
    }
    return false;
};

const linkedListCycle2 = (head) => {
    let current = head;
    let fast = head;
    let firstIteration = true;

    while(fast !== null && fast.next !== null){
        if(fast === curr && !firstIteration) return true;
        curr = curr.next;
        fast = fast.next.next;
    }
    return false;
}
