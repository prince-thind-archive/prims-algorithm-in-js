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

        let target=0;
        for (let i = 0; i < 7; i++)
        {
            for (let j = 0; j < 7; j++)
            {
                if (primsArr[i][j] < min &&primsArr[i][j]!=0)
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
        let rowNode=0;
        let columnNode=0;

        for (let k = 0; k < 6; k++)
        {
            min = Infinity;
            unconnectedGraphFlag = true;
            for (let i of visited)
            {

                for (let j = 0; j < 7; j++)
                {
                    if (primsArr[i][j] < min && !visited.includes(j) && primsArr[i][j]!=0)
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
             resultString += alphaMap[i] + "-" + alphaMap[j] +"("+primsArr[i][j]+") , ";
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


