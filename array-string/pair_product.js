/*
Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

test_00:
pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
test_01:
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
test_02:
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
test_03:
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
test_04:
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
test_05:
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
*/

const pairProduct = (numbers, target) => {
    const obj = {};
    for(let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        const prod = target / num;
        if(prod in obj) return [i, obj[prod]];
        obj[num] = i;
    }
};


const pairProductMap = (numbers, target) => {
    const map = new Map();
    for(let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        const prod = target / num;
        if(map.has(prod)) return [i, map.get(prod)];
        map.set(num, i);
    }
    return map;
};


// Time Complexity: O(n) - iterating over numbers array.
// Space Complexity: O(n) - created object and adde into it.
