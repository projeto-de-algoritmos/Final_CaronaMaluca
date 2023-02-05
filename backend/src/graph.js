const {cities} = require('./database/states');
const zipcodes = require('zipcodes');

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

module.exports = {
  findShortestPath
}