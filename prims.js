function prims()
{
    let alphaMap = ["A", "B", "C", "D", "E", "F", "G"];
    let resultString = "";
    let resultWeight = 0;

    let visited = [];
    let edges = [];
    let min = Infinity;
    let unconnectedGraphFlag = true;

    findInitialNode();
    createEdges();
    printResult();

    //funtion definitions
    function findInitialNode()
    {

        let target;
        for (let i = 0; i < 7; i++)
        {
            for (let j = 0; j < 7; j++)
            {
                if (primsArr[i][j] < min)
                {
                    min = primsArr[i][j];
                    target = i;
                }
            }
        }
        visited.push(target);
    }

    function createEdges()
    {
        let rowNode;
        let columnNode;

        for (let k = 0; k < 6; k++)
        {
            min = Infinity;
            unconnectedGraphFlag = true;
            for (let i of visited)
            {

                for (let j = 0; j < 7; j++)
                {
                    if (primsArr[i][j] < min && !visited.includes(j))
                    {
                        unconnectedGraphFlag = false;
                        min = primsArr[i][j];
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

    function printResult()
    {
        for ([i, j] of edges)
        {
            resultString += alphaMap[i] + "-" + alphaMap[j] + ", ";
        }
        resultString = "Result: " + resultString;


        if (unconnectedGraphFlag)
        {
            resultString += " (Unconnected Graph)";
        }

        resultTextP.textContent = resultString;
        resultWeightP.textContent = "Total Weight: " + resultWeight;
    }
}


