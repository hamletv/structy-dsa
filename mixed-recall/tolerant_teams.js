/*
Write a function, tolerantTeams, that takes in an array of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.

test_00:
tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader']
]); // -> true
test_01:
tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader'],
  ['raj', 'philip'],
  ['seb', 'raj']
]); // -> false
test_02:
tolerantTeams([
  ['cindy', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> true
test_03:
tolerantTeams([
  ['alex', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> false
test_04:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_05:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_06:
tolerantTeams([
  ['alan', 'jj'],
  ['jj', 'richard'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_07:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['betty', 'christine'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> false
*/

const tolerantTeams = (rivalries) => {
    const graph = createGraph(rivalries);

    for(node in graph){
        if(!(node in coloring) && !isBipartite(graph, node, coloring, false)) return false;
    }
    return true;
};

const createGraph = (playerEdgeList) => {
    const graph = {};

    for(let edge of playerEdgeList){
        const [p1, p2] = edge;
        if(!(p1 in graph)) graph[p1] = [];
        if(!(p2 in graph)) graph[p2] = [];
        graph[p1].push(p2);
        graph[p2].push(p1);
    }
    return graph;
};

const isBipartite = (graph, node, coloring, currColor) => {
    if(node in coloring) return coloring[node] === currColor;
    coloring[node] = currColor;

    for(let neighbor of graph[node]){
        if(!isBipartite(graph, neighbor, coloring, !currColor)) return false;
    }
    return true;
};
