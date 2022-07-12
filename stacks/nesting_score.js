/*
Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.

test_00:
nestingScore("[]"); // -> 1
test_01:
nestingScore("[][][]"); // -> 3
test_02:
nestingScore("[[]]"); // -> 2
test_03:
nestingScore("[[][]]"); // -> 4
test_04:
nestingScore("[[][][]]"); // -> 6
test_05:
nestingScore("[[][]][]"); // -> 5
test_06:
nestingScore("[][[][]][[]]"); // -> 7
test_07:
nestingScore("[[[[[[[][]]]]]]][]"); // -> 129
*/


const nestingScore = (str) => {
    // initialize stack with 0
    const stack = [0];

    // loop through str, chars are going to be either '[' or ']'.
    // if opening bracket, push 0 into stack, if closing bracket pop and
    // if popped is 0, add 1 to top of stack. if not 0 add 2 and multiply by value of popped.
    for(let char of str) {
        if(char === '[') stack.push(0);
        else {
            const popped = stack.pop();
            if(popped === 0) stack[stack.length - 1] += 1;
            else stack[stack.length - 1] += 2 * popped;
        }
    }
    // product of every bracket combo only thing left in stack, return its index
    return stack[0];
};
