//Document Elements
const matrixDiv = document.querySelector(".matrix");
const generateBtn = document.querySelector(".generate-button");
const findPathBtn = document.querySelector(".find-path");
const resultTextP = document.querySelector(".result-text");
const resultWeightP = document.querySelector(".result-weight");

let matrixElementFields = [];   //input Fields
let primsArr = [];   // array for use in prim's algo


generateMatrixDivs();

generateBtn.addEventListener('click', randomiseMatrixDivs);
findPathBtn.addEventListener('click', main);




//function definitions
function main()
{
    constructPrimsArray();
    prims();  //defined in prims.js
}
function constructPrimsArray()
{
    primsArr = [];
    for (let i = 0; i < 7; i++)
    {
        primsArr.push([]);
        for (let j = 0; j < 7; j++)
        {
            primsArr[i][j] = +matrixElementFields[i][j].value;
        }
    }
}

function generateMatrixDivs()
{
    for (let i = 0; i < 7; i++)
    {
    
        matrixElementFields.push([]);
        for (let j = 0; j < 7; j++)
        {
            const matrixElement = document.createElement('input');
            matrixElement.classList.add('matrix-element');
            matrixElement.value = 0;
            matrixElementFields[i][j] = (matrixElement);
            matrixDiv.appendChild(matrixElementFields[i][j]);
        }
    }
}

function randomiseMatrixDivs()
{
    for (let i = 0; i < 7; i++)
    {
        for (let j = 0; j < 7; j++)
        {
            if (i == j)
            {
                matrixElementFields[i][j].value = Infinity;
            }
            if (i < j)
            {
                if (Math.trunc(Math.random() * 5) == 0)
                {
                    matrixElementFields[i][j].value=Infinity;
                }
                else { matrixElementFields[i][j].value = Math.trunc(Math.random() * 25 + 1); }
            }
            else
            {
                matrixElementFields[i][j].value = matrixElementFields[j][i].value;
            }
        }
    }
}