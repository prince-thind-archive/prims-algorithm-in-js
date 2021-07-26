function prims(matrixArr) {
  let resultWeight = 0;
  let visited = [];
  let edges = [];
  let min = Infinity;
  let unconnectedGraphFlag = true;

  findInitialNode();
  createEdges();

  function findInitialNode() {
    let target = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (matrixArr[i][j] < min && matrixArr[i][j] != 0) {
          min = matrixArr[i][j];
          target = i;
        }
      }
    }
    visited.push(target);
  }

  function createEdges() {
    let rowNode = 0;
    let columnNode = 0;

    for (let k = 0; k < 6; k++) {
      min = Infinity;
      unconnectedGraphFlag = true;
      for (let i of visited) {
        for (let j = 0; j < 7; j++) {
          if (
            matrixArr[i][j] < min &&
            !visited.includes(j) &&
            matrixArr[i][j] != 0
          ) {
            unconnectedGraphFlag = false;
            min = matrixArr[i][j];
            columnNode = j;
            rowNode = i;
          }
        }
      }
      visited.push(columnNode);
      edges.push([rowNode, columnNode]);
      resultWeight += min;
    }
  }


  return { edges, resultWeight, unconnectedGraphFlag };
}

export default prims;
