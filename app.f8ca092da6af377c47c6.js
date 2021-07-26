(self["webpackChunkprims_algorithm_in"] = self["webpackChunkprims_algorithm_in"] || []).push([[143],{

/***/ 637:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: ./src/prims.js
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

/* harmony default export */ const src_prims = (prims);

;// CONCATENATED MODULE: ./src/index.js



const DOMNodes = (() => {
  const matrix = document.querySelector('#matrix');
  const generateBtn = document.querySelector('#generate-button');
  const findPathBtn = document.querySelector('#find-path');
  const resultText = document.querySelector('#result-text');
  const resultWeight = document.querySelector('#result-weight');
  return {
    matrix,
    generateBtn,
    findPathBtn,
    resultText,
    resultWeight,
  };
})();

(() => {
  const matrixElementFields = initialMatrix();

  DOMNodes.generateBtn.addEventListener('click', randomiseMatrixDivs);
  DOMNodes.findPathBtn.addEventListener('click', main);

  function initialMatrix() {
    const arr = [];
    for (let i = 0; i < 7; i += 1) {
      arr.push([]);
      for (let j = 0; j < 7; j += 1) {
        const matrixElement = document.createElement('input');
        matrixElement.classList.add('matrix-element');
        matrixElement.value = 0;
        arr[i][j] = matrixElement;
        DOMNodes.matrix.appendChild(matrixElement);
      }
    }
    return arr;
  }
  function randomiseMatrixDivs() {
    for (let i = 0; i < 7; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === j) {
          matrixElementFields[i][j].value = 0;
        }
        if (i < j) {
          matrixElementFields[i][j].value = Math.trunc(Math.random() * 26);
        } else {
          matrixElementFields[i][j].value = matrixElementFields[j][i].value;
        }
      }
    }
  }

  function main() {
    const matrixArr = constructArrFromFields(matrixElementFields);
    const { edges, resultWeight, unconnectedFlag } = src_prims(matrixArr);
    printResult(edges, resultWeight, matrixArr, unconnectedFlag);
  }

  function constructArrFromFields(matrixFields) {
    const arr = [];
    for (let i = 0; i < 7; i += 1) {
      arr.push([]);
      for (let j = 0; j < 7; j += 1) {
        arr[i][j] = +matrixFields[i][j].value;
      }
    }
    return arr;
  }
  function printResult(edges, resultWeight, matrixArr, unconnectedGraphFlag) {
    const alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let resultString = '';

    edges.forEach((edge) => {
      const [i, j] = edge;
      resultString += `${alphaMap[i]}-${alphaMap[j]}(${matrixArr[i][j]}), `;
    });

    resultString = `Result: ${resultString}`;

    if (unconnectedGraphFlag) {
      resultString += ' (Unconnected Graph)';
    }

    DOMNodes.resultText.textContent = resultString;
    DOMNodes.resultWeight.textContent = `Total Weight: ${resultWeight}`;
  }
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(637));
/******/ }
]);
//# sourceMappingURL=app.f8ca092da6af377c47c6.js.map