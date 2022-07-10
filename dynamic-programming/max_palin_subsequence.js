/*
Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

test_00:
maxPalinSubsequence("luwxult"); // -> 5
test_01:
maxPalinSubsequence("xyzaxxzy"); // -> 6
test_02:
maxPalinSubsequence("lol"); // -> 3
test_03:
maxPalinSubsequence("boabcdefop"); // -> 3
test_04:
maxPalinSubsequence("z"); // -> 1
test_05:
maxPalinSubsequence("chartreusepugvicefree"); // -> 7
test_06:
maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"); // -> 15
test_07:
maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"); // -> 31
*/

const maxPalinSubsequence = (string, i=0, j=string.length - 1) => {
    if(i === j) return 1;
    if(i > j) return 0;
    if(string[i] === string[j]){
        return 2 + maxPalinSubsequence(string, i+1, j-1);
    } else {
        return Math.max(
            maxPalinSubsequence(string, i+1, j),
            maxPalinSubsequence(string, i, j-1)
        )
    }
}


console.log(maxPalinSubsequence("luwxult"))
