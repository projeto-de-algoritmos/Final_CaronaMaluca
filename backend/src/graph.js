const {cities} = require('./database/states');
const zipcodes = require('zipcodes');


// variaveis globais
var dp;
let v =[]
let p = []
let solution =  []

function getNodeDistance(node1,node2) {
  var dist = zipcodes.distance(node1, node2);
  return zipcodes.toKilometers(dist);
}

function init() { 

  for(i = 0; i < cities.length; i++) {
    
    let dists = {}
    for(o = 0; o < cities[i].edges.length; o++){
      
      dists[cities[i].edges[o]] = getNodeDistance(cities[i].zipcode,cities[i].edges[o])
    }
    cities[i]['dist'] = dists
  }
}

let shortestDistanceNode = (distances, visited) => {
  // create a default value for shortest
	let shortest = null;
	
  	// for each node in the distances object
	for (let node in distances) {
    	// if no node has been assigned to shortest yet
  		// or if the current node's distance is smaller than the current shortest
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
        	
	  	// and if the current node is in the unvisited set
		if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
			shortest = node;
		}
	}
	return shortest;
};

function findShortestPath(startNode, endNode) {
  init();

  let distances = {};
  let startPosition = cities.findIndex(p => p.zipcode == startNode);
  distances = Object.assign(distances, cities[startPosition]).dist;
  distances[endNode] = "Infinity";


  let parents = {}
  parents[endNode] = null;
  for (i = 0; i < cities[startPosition].edges.length; i++){
    child = cities[startPosition].edges[i]
    parents[child] = cities[startPosition].zipcode;
  }

  visited = [];
  let node = shortestDistanceNode(distances, visited);

  while(node){
    let distance = distances[node];
    nodePos = cities.findIndex(p => p.zipcode == node)
    let childrenZipcodes = cities[nodePos].edges
    let childrenDist = [];
    for(let i = 0; i < childrenZipcodes.length; i++){
      childrenDist[i] = cities[nodePos].dist[childrenZipcodes[i]]
    }
    
    for (childPos in childrenZipcodes){
      zip = childrenZipcodes[childPos];

      if(zip === startNode){
        continue;
      }else{
        let newdistance = distance + childrenDist[childPos];

        if(!distances[zip] || newdistance < distances[childrenZipcodes[childPos]]) {
          distances[childrenZipcodes[childPos]] = newdistance;

          parents[zip] = node;
        }
      }
    }

    visited.push(node);
    node = shortestDistanceNode(distances,visited);

  }

  let shortestPath = [endNode];
  let parent = parents[endNode];
  let shortestPathNodes = [];
  nodeInfo = zipcodes.lookup(endNode);

  aux = {'distFromParent': null}
  aux.distFromParent = distances[endNode] - getNodeDistance(parents[endNode],startNode);

  nodeInfo = Object.assign(nodeInfo,aux);
  shortestPathNodes.push(nodeInfo); 

  while(parent) {
    shortestPath.push(parent);
    nodeInfo = zipcodes.lookup(parent);
    shortestPathNodes.push(nodeInfo);

    aux = {'distFromParent': null}
    aux.distFromParent = distances[parent] - getNodeDistance(parents[parent],startNode);

    nodeInfo = Object.assign(nodeInfo,aux);

    parent = parents[parent];
  }
  shortestPath.reverse();
  shortestPathNodes.reverse();

  result = {
    totalDistance: distances[endNode],
    path: shortestPath,
    nodesInfo: shortestPathNodes
  }

  return result;

}


function init_knapsack(quantity_itens,capacity){
  dp = Array(quantity_itens+1).fill(0).map(()=>Array(capacity+1).fill(0))
  // return dp
}

var ans = 0;
function get_knapsack_value(products ,capacity){
  let quantity_itens = products.length
  // console.log('qtde',quantity_itens)

  v[0] = 0
  p[0] = 0

  init_knapsack(quantity_itens,capacity);
  for(i = 0; i < quantity_itens; i++){
    v[i+1] = products[i].value
    p[i+1] = products[i].weight
  }
  // console.log('v',v)
  // console.log('p',p)
  // console.log('qtde',quantity_itens)
  // console.log('capacity',capacity)


  for(i = 1; i <= quantity_itens; i++){
    for(P = 0; P <= capacity; P++){
      dp[i][P] = dp[i-1][P];
      
      if (P >= p[i]){
        dp[i][P] = Math.max(dp[i][P], dp[i-1][P - p[i]] + v[i])
      }
      answer = Math.max(ans, dp[i][P])
    }
  }

  find_solution(dp,quantity_itens,capacity)

  chosen_products = []
  total_weight = 0
  // console.log(solution)
  for(i = 0; i < solution.length; i++){
    chosen_products.push(products[solution[i]-1])
    total_weight = total_weight+ products[solution[i]-1].weight
  }

  // console.log(dp)
  // console.log(chosen_products)
  // console.log(answer)
  return ({answer, chosen_products, total_weight})

}

function find_solution(matrix, lastrow, target){
  if(lastrow == 0){
    return solution
  }

  if(matrix[lastrow-1][target] < matrix[lastrow-1][target- p[lastrow]] + v[lastrow]){
    solution.push(lastrow);
    target = target - p[lastrow];
    lastrow = lastrow -1;
    find_solution(matrix, lastrow, target)

  }
}

// init_knapsack(6,10);
// get_value(10, 6, [1,2,3,9,20,4,6,3,3,1], [2, 3, 2, 9, 10, 1, 1, 1, 5, 7])
// console.log(ans)
// console.log(dp)

// products = [{'name': 'iphone10','value':14,'weight':10},{'name': 'iphone11','value':20,'weight':10},
// {'name': 'iphone12','value':30,'weight':10}]
// value = get_knapsack_value(products,20)
// console.log(value)

// result = {
//   totalDistance: 30,
//   path: 'sei_la',
//   nodesInfo: [1,23,4]
// }

// var obj = Object.assign({}, result, value)
// console.log(obj)


module.exports = {
  findShortestPath, get_knapsack_value
}

// [  0   1   2   3   4   5   6  7   8   9  10  11  12  13  14  15  16  17  18  19  20 
//   [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 0
//   [0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], 1
//   [0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 20, 20, 20, 20,20, 20, 20, 20, 20, 20, 34],  2
//   [0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 50]  3
// ]