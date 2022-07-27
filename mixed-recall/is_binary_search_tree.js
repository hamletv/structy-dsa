/*
Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.

A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

test_00:
const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> true
test_01:
const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(15);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   15     19

isBinarySearchTree(a); // -> false
test_02:
const a = new Node(12);
const b = new Node(5);
const c = new Node(19);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     19
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> true
test_03:
const a = new Node(12);
const b = new Node(5);
const c = new Node(10);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     10
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> false
test_04:
const q = new Node(54);
const r = new Node(42);
const s = new Node(70);
const t = new Node(31);
const u = new Node(50);
const v = new Node(72);
const w = new Node(47);
const x = new Node(90);

q.left = r;
q.right = s;
r.left = t;
r.right = u;
s.right = v;
u.left = w;
v.right = x;

//       54
//     /    \
//    42     70
//   / \      \
// 31   50     72
//     /        \
//    47         90

isBinarySearchTree(q); // -> true
*/

const isBinarySearchTree = (root) => {
    const values = [];
    traversal(root, values);
    return isValid(values);
};

const inOrderTraversal = (root, values) => {
    if(root === null) return;
    inOrderTraversal(root.left, values);
    values.push(root.left);
    inOrderTraversal(root.right, values);
};

const isValid = (values) => {
    for(let i = 0; i < values.length - 1; i++){
        if(values[i] > values[i+1]) return false;
    }
    return true;
};
