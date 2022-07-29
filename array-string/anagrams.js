/*
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true
test_01:
anagrams('cats', 'tocs'); // -> false
test_02:
anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:
anagrams('paper', 'reapa'); // -> false
test_04:
anagrams('elbow', 'below'); // -> true
test_05:
anagrams('tax', 'taxi'); // -> false
test_06:
anagrams('taxi', 'tax'); // -> false
test_07:
anagrams('night', 'thing'); // -> true
test_08:
anagrams('abbc', 'aabc'); // -> false
*/

const anagrams = (s1, s2) => {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
};


const anagrams2 = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    const obj = {};

    for(let char of s1){
        if(!obj[char]) obj[char] = 1;
        else obj[char]++;
    }

    for(let char of s2){
        if(obj[char]) obj[char]--;
        else return false;
    }
    return true;
};

// Time Complexity: O(s1+s2) - worst case scenario strings are not the same and need to loop over 2 strings of different lengths.
// Space Complexity: O(n) - object data structure declared, equivalent to length of one string.
