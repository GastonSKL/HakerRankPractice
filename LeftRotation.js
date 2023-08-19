/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */


//A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

let d = 2;

let arr = [1,2,3,4,5];





function rotateLeft(d, arr) {

    for (let i = 0; i < d; i++) {
        arr.push(arr.shift());
    }

    return arr;
}

console.log(rotateLeft(2,arr));