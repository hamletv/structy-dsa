/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

test_00:
compress('ccaaatsss'); // -> '2c3at3s'
test_01:
compress('ssssbbz'); // -> '4s2bz'
test_02:
compress('ppoppppp'); // -> '2po5p'
test_03:
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
test_04:
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
// -> '127y'
*/

const compress = (string) => {
    let output = '';
    let count = 1;

    for(let i = 1; i < string.length + 1; i++){
        if(string[i] === string[i-1]) count++;
        else {
            output += count > 1 ? count + string[i-1] : string[i-1];
            count = 1;
        }
    }
    return output;
};

// Time Complexity: O(n) - iterating through entire string.
// Space Complexity: O(1) - not using any data structure.
