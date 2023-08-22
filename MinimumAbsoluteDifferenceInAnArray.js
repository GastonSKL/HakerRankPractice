/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//Given an array of integers, find the minimum absolute difference between any two elements in the array.

let arr = [-2,2,4];

console.log(minDif)

function minimumAbsoluteDifference(arr) {

let minDif = Number.POSITIVE_INFINITY;

arr.sort((a,b) => a - b);

for(let i = 1; i < arr.length; i++)
{
    
    if(Math.abs(arr[i] - arr[i - 1]) < minDif) minDif = Math.abs(arr[i] - arr[i - 1]); 

}

return minDif;

}