/*
Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.

test_00:
safeCracking([
  [7, 1],
  [1, 8],
  [7, 8],
]); // -> '718'
test_01:
safeCracking([
  [3, 1],
  [4, 7],
  [5, 9],
  [4, 3],
  [7, 3],
  [3, 5],
  [9, 1],
]); // -> '473591'
test_02:
safeCracking([
  [2, 5],
  [8, 6],
  [0, 6],
  [6, 2],
  [0, 8],
  [2, 3],
  [3, 5],
  [6, 5],
]); // -> '086235'
test_03:
safeCracking([
  [0, 1],
  [6, 0],
  [1, 8],
]); // -> '6018'
test_04:
safeCracking([
  [8, 9],
  [4, 2],
  [8, 2],
  [3, 8],
  [2, 9],
  [4, 9],
  [8, 4],
]); // -> '38429'
*/

const safeCracking = (hints) => {
    const graph = createGraph(hints);
};

const createGraph = (edges) => {
    const graph = {};
    for(let edge of edges){
        const [num1, num2] = edge;
        if(!(num1 in graph)) graph[num1] = [];
        if(!(num2 in graph)) graph[num2] = [];
        graph[num1].push(`${num2}`);
    }
    return graph;
};

const topologicalOrder = (graph) => {
    const parents = {};

    for(let node in graph){
        parents[node] = 0;
    }

    for(let node in graph){
        for(let child of graph[node]){
            parents[child] += 1;
        }
    }

    const ready = [];
    for(let node in parents){
        if(parents[node] === 0) ready.push(node);
    }

    let order = '';
    while(ready.length > 0){
        const node = ready.pop()
        order += node;
        for(let child of graph[node]){
            parents[child] -= 1;
            if(parents[child] === 0) ready.push(child);
        }
    }
    return order;
};
