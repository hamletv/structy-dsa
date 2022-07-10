/*
Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

test_00:
overlapSubsequence("dogs", "daogt"); // -> 3
test_01:
overlapSubsequence("xcyats", "criaotsi"); // -> 4
test_02:
overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
test_03:
overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
test_04:
overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
); // -> 15
*/

const overlapSubsequence = (str1, str2, i=0, j=0) => {
    if(i === str1.length || j === str2.length) return 0;
    if(str1[i] === str2[j]){
        return 1 + overlapSubsequence(str1, str2, i+1, j+1);
    } else {
        return Math.max(
            overlapSubsequence(str1, str2, i+1, j),
            overlapSubsequence(str1, str2, i, j+1)
        )
    }
};


const overlapSubsequenceMemo = (str1, str2, i=0, j=0, memo={}) => {
    const key = `${i}, ${j}`;
    if(key in memo) return memo[key];
    if(i === str1.length || j === str2.length) return 0;
    if(str1[i] === str2[j]){
        memo[key] = 1 + overlapSubsequenceMemo(str1, str2, i+1, j+1, memo);
    } else {
        memo[key] = Math.max(
            overlapSubsequenceMemo(str1, str2, i+1, j, memo),
            overlapSubsequenceMemo(str1, str2, i, j+1, memo)
        )
    }
    return memo[key];
};

console.log(overlapSubsequence("xcyats", "criaotsi"));
console.log(overlapSubsequenceMemo("kinfolklivemustache", "bespokekinfolksnackwave"));
