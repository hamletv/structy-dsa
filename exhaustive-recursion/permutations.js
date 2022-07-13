/*
Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.

The subarrays may be returned in any order.

You may assume that the input array contains unique elements.

test_00:
permutations(['a', 'b', 'c']); // ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
test_01:
permutations(['red', 'blue']); // ->
// [
//   [ 'red', 'blue' ],
//   [ 'blue', 'red' ]
// ]
test_02:
permutations([8, 2, 1, 4]); // ->
// [
//   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ],
//   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ],
//   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ],
//   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ],
//   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ],
//   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ],
//   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ],
//   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ],
//   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ],
//   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ],
//   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ],
//   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ]
// ]
test_03:
permutations([]); // ->
// [
//  [ ]
// ]
*/

const permutations = items => {
    if(items.length === 0) return [[]];

    const first = items[0];
    const remainder = items.slice(1);
    const perms = permutations(remainder);
    console.log('first: ', first, 'remainder: ', remainder, 'perms: ', perms)
    const allPermutations = [];

    for(let perm of perms){
        for(let i = 0; i <= perm.length; i++){
            allPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    return allPermutations;
};


console.log(permutations(['red', 'blue']))
