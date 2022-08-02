/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:
mostFrequentChar('bookeeper'); // -> 'e'
test_01:
mostFrequentChar('david'); // -> 'd'
test_02:
mostFrequentChar('abby'); // -> 'b'
test_03:
mostFrequentChar('mississippi'); // -> 'i'
test_04:
mostFrequentChar('potato'); // -> 'o'
test_05:
mostFrequentChar('eleventennine'); // -> 'e'
test_06:
mostFrequentChar("riverbed"); // -> 'r'
*/

const mostFrequentChar = (string) => {
    const obj = {};
    let output;
    let count = -Infinity;

    for(let char of string){
        if(!obj[char]) obj[char] = 1;
        else obj[char]++;
    }

    for(let key in obj){
        if(obj[key] > count){
            count = obj[key];
            output = key;
        }
        else if(obj[key] <= count) continue;
    }
    return output;
};

// Time Complexity: O(n) - iterating over entire string.
// Space Complexity: O(n) - declared object and adding into it.
