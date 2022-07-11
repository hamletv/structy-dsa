/*
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.

For example,

countingChange(4, [1,2,3]) -> 4

There are four different ways to make an amount of 4:

1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
test_00:
countingChange(4, [1, 2, 3]); // -> 4
test_01:
countingChange(8, [1, 2, 3]); // -> 10
test_02:
countingChange(24, [5, 7, 3]); // -> 5
test_03:
countingChange(13, [2, 6, 12, 10]); // -> 0
test_04:
countingChange(512, [1, 5, 10, 25]); // -> 20119
test_05:
countingChange(1000, [1, 5, 10, 25]); // -> 142511
test_06:
countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // -> 1525987916
*/


const countingChange = (amount, coins, i=0) => {
    if(amount === 0) return 1;
    const coin = coins[i];

    let total = 0;
    for(let qty = 0; qty * coin <= amount; qty++){
        const remainder = amount - (qty * coin);
        total += countingChange(remainder, coins, i+1);
    }
    return total;
};


const countingChangeMemo = (amount, coins, i=0, memo={}) => {
    const key = `${amount}, ${i}`;
    if(amount === 0) return 1;
    if(key in memo) return memo[key];
    const coin = coins[i];

    let total = 0;
    for(let qty = 0; qty * coin <= amount; qty++){
        const remainder = amount - (qty * coin);
        total += countingChangeMemo(remainder, coins, i+1, memo);
    }
    memo[key] = total;
    return total;
};


console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
