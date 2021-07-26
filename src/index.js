import './style.css';
import prims from './prims';

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
    const { edges, resultWeight, unconnectedFlag } = prims(matrixArr);
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
