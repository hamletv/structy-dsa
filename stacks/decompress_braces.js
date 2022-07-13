/*
Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.
You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

test_00:
decompressBraces("2{q}3{tu}v");
// -> qqtututuv
test_01:
decompressBraces("ch3{ao}");
// -> chaoaoao
test_02:
decompressBraces("2{y3{o}}s");
// -> yoooyooos
test_03:
decompressBraces("z3{a2{xy}b}");
// -> zaxyxybaxyxybaxyxyb
test_04:
decompressBraces("2{3{r4{e}r}io}");
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio
test_05:
decompressBraces("go3{spinn2{ing}s}");
// -> gospinningingsspinningingsspinningings
test_06:
decompressBraces("2{l2{if}azu}l");
// -> lififazulififazul
test_07:
decompressBraces("3{al4{ec}2{icia}}");
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia
*/

const decompressBraces = (s) => {
    const stack = [];

    for(let char of s){
        if(char.match(/[1-9]/i)) stack.push(+char);
        if(char.match(/[a-z]/i)) stack.push(char);
        if(char === '}'){
            let segment = '';
            while(typeof stack[stack.length - 1] !== 'number'){
                const popped = stack.pop();
                segment = popped + segment;
            }
            const number = stack.pop();
            stack.push(segment.repeat(number));
        }
    }
    return stack.join('');
};

console.log(decompressBraces("ch3{ao}"));
