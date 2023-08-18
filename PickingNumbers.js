/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

let a = [1,1,2,2,4,4,5,5,5];

function pickingNumbers(a) {

   let array = new Array(a.length).fill(0);

   let max = 0;

   for (let i = 0; i < a.length; i++) {

    array[a[i]]++;

}

    for (let i = 0; i < a.length; i++) {

        if(array[i] + array[i+1] > max) max = array[i] + array[i+1]; 

    }

    return max;
}

console.log(pickingNumbers(a));