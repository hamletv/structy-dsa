/*
Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.

test_00:
const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> true
test_01:
const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
test_02:
const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
test_03:
const dictionary = ["miles", "milestone", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
test_04:
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
test_05:
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> false
*/

const detectDictionary = (dictionary, alphabet) => {
    for(let i = 0; i < dictionary.length - 1; i++){
        const word1 = dictionary[i];
        const word2 = dictionary[i+1];
        if(_detectDictionary(word1, word2, alphabet) === false) return false;
    }
    return true;
};

const _detectDictionary = (word1, word2, alphabet) => {
    const maxLength = Math.max(word1.length, word2.length);
    for(let i = 0; i < maxLength; i++){
        const char1 = word1[i];
        const char2 = word2[i];
        const idx1 = alphabet.indexOf(char1);
        const idx2 = alphabet.indexOf(char2);
        if(idx1 < idx2) return true;
        else if(idx1 > idx2) return false;
    }
    return true;
};
