/*
Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.

test_00:
canConcat("oneisnone", ["one", "none", "is"]); // -> true
test_01:
canConcat("oneisnone", ["on", "e", "is"]); // -> false
test_02:
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
test_03:
canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
test_04:
canConcat("santahat", ["santah", "hat"]); // -> false
test_05:
canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
test_06:
canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
*/

const canConcat = (str, words) => {
    if(str === '') return true;
    for(let word of words){
        if(str.startsWith(word)){
            const suffix = str.slice(word.length);
            if(canConcat(suffix, words) === true) return true;
        }
    }
    return false;
};


const canConcatMemo = (str, words, memo={}) => {
    if(str in memo) return memo[str];
    if(str === '') return true;

    for(let word of words){
        if(str.startsWith(word)){
            const suffix = str.slice(word.length);
            if(canConcat(suffix, words, memo) === true){
                memo[str] = true;
                return true;
            }
        }
    }
    memo[str] = false;
    return false;
};

console.log(canConcatMemo("oneisnone", ["on", "e", "is"]));
