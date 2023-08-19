/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */
let sticks = [1,2,3,4,5,10];
function maximumPerimeterTriangle(sticks) {
    sticks.sort((a,b)=> a-b);
    let i = sticks.length - 3;

    while( (i >= 0) && ((sticks[i] + sticks[i + 1] <= sticks[i + 2])))
    {
        i--;
    }

    if(i >= 0) return [sticks[i], sticks[i+1], sticks[i+2]];
    else return [-1]
}

console.log(maximumPerimeterTriangle(sticks));