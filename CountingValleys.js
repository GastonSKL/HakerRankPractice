/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

let path = ["U","D","D","D","U","D","U","U"]
let steps = 8;
function countingValleys(steps, path) {

    let altitude = 0;
    let valleys = 0;

    for (let i = 0; i < path.length; i++)
    {
        //If path equals U the altitud up's by one
        if(path[i] == "U")
        {
            altitude++
        }
        //The oposite occurs if a D appears. But hear, before it's substracted, I check if the current altitud is -1 if I substract 1. That means that 
        //i'm entering a valley
        if(path[i] == "D")
        {
            if(altitude - 1 == -1) valleys++;
            altitude--;

        }

        
    }
    return valleys;
}

console.log(countingValleys(steps,path));