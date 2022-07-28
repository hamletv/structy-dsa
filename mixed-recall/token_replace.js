/*
Write a function, tokenReplace, that takes in an object of tokens and a string. The function should return a new string where tokens are replaced.

Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted. Tokens should be replaced from left to right in the string (see test_05).

test_00:
const tokens = {
  '$LOCATION$': 'park',
  '$ANIMAL$': 'dog',
};
tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens);
// -> 'Walk the dog in the park!'
test_01:
const tokens = {
  '$ADJECTIVE$': 'quick',
  '$VERB$': 'hopped',
  '$DIRECTION$': 'North'
};
tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', tokens);
// -> 'the quick fox hopped quickly Northward'
test_02:
const tokens = {
  '$greeting$': 'hey programmer',
};
tokenReplace('his greeting is always $greeting$.', tokens);
// -> 'his greeting is always hey programmer.'
test_03:
const tokens = {
  '$A$': 'lions',
  '$B$': 'tigers',
  '$C$': 'bears',
};
tokenReplace('$A$$B$$C$, oh my.', tokens);
// -> 'lionstigersbears, oh my.'
test_04:
const tokens = {
  '$A$': 'lions',
  '$B$': 'tigers',
  '$C$': 'bears',
};
tokenReplace('$B$', tokens);
// -> 'tigers'
test_05:
const tokens = {
  '$second$': 'beta',
  '$first$': 'alpha',
  '$third$': 'gamma',
};
tokenReplace('$first$second$third$', tokens);
// -> 'alphasecondgamma'
*/

const tokenReplace = (s, tokens) => {
    let output = '';
    let i = 0;
    let j = 1;

    while(i < s.length){
        if(s[i] !== '$'){
            output += s[i];
            i++;
            j = i+1;
        } else if(s[j] !== '$'){
            j+=1;
        } else {
            const key = s.slice(i, j+1);
            output += tokens[key];
            i = j+1;
            j = i+1;
        }
    }
    return output;
};
