/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

let arr = [5, 2, 3, 4, 1];

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);

  let min = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < min)
      min = Math.abs(arr[i] - arr[i + 1]);
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) == min) newArr.push(arr[i], arr[i + 1]);
  }

  return newArr;
}


console.log(closestNumbers(arr));