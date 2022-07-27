/*
Write a function, combineIntervals, that takes in an array of intervals as an argument. Each interval is an array containing a pair of numbers representing a start and end time. Your function should combine overlapping intervals and return an array containing the combined intervals.

For example:

Given two intervals:

[1, 4] and [3, 7]

The intervals overlap and
should be combined into:

[1, 7]
You may return the combined intervals in any order.

You can assume that the input array contains at least one interval and all intervals are valid with start < end.

test_00
const intervals = [
  [1, 4],
  [12, 15],
  [3, 7],
  [8, 13],
];
combineIntervals(intervals);
// -> [ [1, 7], [8, 15] ]
test_01
const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];
combineIntervals(intervals);
// -> [ [2, 9], [10, 12], [20, 24] ]
test_02
const intervals = [
  [3, 7],
  [5, 8],
  [1, 5],
];
combineIntervals(intervals);
// -> [ [1, 8] ]
test_03
const intervals = [
  [3, 7],
  [10, 13],
  [5, 8],
  [27, 31],
  [1, 5],
  [12, 16],
  [20, 22],
];
combineIntervals(intervals);
// -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]
test_04
const intervals = [
  [3, 7],
  [10, 13],
  [5, 8],
  [27, 31],
  [1, 5],
  [12, 16],
  [20, 32],
];
combineIntervals(intervals);
// -> [ [1, 8], [10, 16], [20, 32] ]
test_05
const intervals = [
  [64, 70],
  [50, 55],
  [62, 65],
  [12, 50],
  [72, 300000],
];
combineIntervals(intervals);
// -> [ [12, 55], [62, 70], [72, 300000] ]
*/

const combineIntervals = (intervals) => {
    const sorted = intervals.sort((intA, intB) => intA[0] - intB[0]);
    const combined = [sorted[0]];

    for(let currentInt of sorted.slice(1)){
        const [prevStart, prevEnd] = combined[combined.length - 1];
        const [currStart, currEnd] = currentInt;
        if(currStart <= prevEnd){
            if(currEnd > prevEnd){
                combined[combined.length - 1][1] = currEnd;
            }
        } else {
            combined.push(currentInt)
        }
    }
    return combined;
}
