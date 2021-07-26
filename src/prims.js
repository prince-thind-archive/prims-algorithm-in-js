function prims(matrixArr) {
  let resultWeight = 0;
  const visited = [];
  const edges = [];
  let min = Infinity;
  let unconnectedGraphFlag = true;

  findInitialNode();
  createEdges();

  function findInitialNode() {
    let target = 0;
    for (let i = 0; i < 7; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (matrixArr[i][j] < min && matrixArr[i][j] !== 0) {
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

    for (let k = 0; k < 6; k += 1) {
      min = Infinity;
      unconnectedGraphFlag = true;

      for (let index = 0; index < visited.length; index += 1) {
        const i = visited[index];
        for (let j = 0; j < 7; j += 1) {
          if (
            matrixArr[i][j] < min &&
            !visited.includes(j) &&
            matrixArr[i][j] !== 0
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
