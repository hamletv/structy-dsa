/*
Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. The function should return an array containing the topological-order of the graph.

The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

test_00:
topologicalOrder({
  a: ["f"],
  b: ["d"],
  c: ["a", "f"],
  d: ["e"],
  e: [],
  f: ["b", "e"],
}); // -> ['c', 'a', 'f', 'b', 'd', 'e']
test_01:
topologicalOrder({
  h: ["l", "m"],
  i: ["k"],
  j: ["k", "i"],
  k: ["h", "m"],
  l: ["m"],
  m: [],
}); // -> ['j', 'i', 'k', 'h', 'l', 'm']
test_02:
topologicalOrder({
  q: [],
  r: ["q"],
  s: ["r"],
  t: ["s"],
}); // -> ['t', 's', 'r', 'q']
test_03:
topologicalOrder({
  v: ["z", "w"],
  w: [],
  x: ["w", "v", "z"],
  y: ["x"],
  z: ["w"],
}); // -> ['y', 'x', 'v', 'z', 'w']
*/

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

    const order = [];
    while(ready.length > 0){
        const node = ready.pop();
        order.push(node);
        for(let child of graph[node]){
            parents[child] -= 1;
            if(parents[child] === 0) ready.push(child);
        }
    }
    return order;
};
