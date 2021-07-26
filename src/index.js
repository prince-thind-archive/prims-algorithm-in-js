import './style.css';
import prims from './prims.js';

const DOMNodes = (() => {
  const matrix = document.querySelector('.matrix');
  const generateBtn = document.querySelector('.generate-button');
  const findPathBtn = document.querySelector('.find-path');
  const resultText = document.querySelector('.result-text');
  const resultWeight = document.querySelector('.result-weight');
  return {
    matrix,
    generateBtn,
    findPathBtn,
    resultText,
    resultWeight,
  };
})();

(() => {
  const matrixElementFields = [];

  initializeMatrix(matrixElementFields);

  DOMNodes.generateBtn.addEventListener('click', randomiseMatrixDivs);
  DOMNodes.findPathBtn.addEventListener('click', main);

  function initializeMatrix(matrixElementFields) {
    for (let i = 0; i < 7; i++) {
      matrixElementFields.push([]);
      for (let j = 0; j < 7; j++) {
        const matrixElement = document.createElement('input');
        matrixElement.classList.add('matrix-element');
        matrixElement.value = 0;
        matrixElementFields[i][j] = matrixElement;
        DOMNodes.matrix.appendChild(matrixElement);
      }
    }
  }
  function randomiseMatrixDivs() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i == j) {
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
    let matrixArr = constructArrFromFields(matrixElementFields);
    const { edges, resultWeight, unconnectedFlag } = prims(matrixArr);
    printResult(edges, resultWeight, matrixArr, unconnectedFlag);
  }

  function constructArrFromFields(matrixElementFields) {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push([]);
      for (let j = 0; j < 7; j++) {
        arr[i][j] = +matrixElementFields[i][j].value;
      }
    }
    return arr;
  }
  function printResult(edges, resultWeight, matrixArr, unconnectedGraphFlag) {
    let alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let resultString = '';
    let i = null,
      j = null;

    for ([i, j] of edges) {
      resultString += `${alphaMap[i]}-${alphaMap[j]}(${matrixArr[i][j]}), `;
    }
    resultString = 'Result: ' + resultString;

    if (unconnectedGraphFlag) {
      resultString += ' (Unconnected Graph)';
    }

    DOMNodes.resultText.textContent = resultString;
    DOMNodes.resultWeight.textContent = 'Total Weight: ' + resultWeight;
  }
})();
