/*
Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }

test_00:
befittingBrackets('(){}[](())'); // -> true
test_01:
befittingBrackets('({[]})'); // -> true
test_02:
befittingBrackets('[][}'); // -> false
test_03:
befittingBrackets('{[]}({}'); // -> false
test_04:
befittingBrackets('[]{}(}[]'); // -> false
test_05:
befittingBrackets('[]{}()[]'); // -> true
test_06:
befittingBrackets(']{}'); // -> false
test_07:
befittingBrackets(''); // -> true
test_08:
befittingBrackets('{[(}])'); // -> false
*/

const befittingBrackets = str => {
    const stack = [];
    const brackets = {'(':')', '[':']', '{':'}'};

    for(let char of str){
        if(char in brackets) {
            stack.push(brackets[char])
            console.log('char:', char, 'value:', brackets[char], 'stack:', stack);
        }
        else {
            console.log('top:', stack[stack.length - 1], 'char:', char, 'popped:', stack.pop())
            if(stack.length > 0 && stack[stack.length - 1] === char) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
};


const befittingBrackets2 = str => {
    const stack = [];
    const brackets = {'(':')', '[':']', '{':'}'};

    for(let char in brackets){
        if(char in brackets) stack.push(brackets[char]);
        else if(stack.length > 0 && stack[stack.length - 1] === char) stack.pop();
        else return false;
    }
    return stack.length === 0;
};


console.log(befittingBrackets('[]{}(}[]'))
