// Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements by jumping ahead by fixed steps or skipping some elements instead of searching all elements. This method has a time complexity of O(√n).

function jumpSearch(arr, key) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;
  
    // Finding the block where the element is present (if it is present)
    while (arr[Math.min(step, n) - 1] < key) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
      if (prev >= n)
        return -1;
    }
  
    // Doing a linear search for the key in the block beginning with prev
    while (arr[prev] < key) {
      prev++;
      if (prev === Math.min(step, n))
        return -1;
    }
  
    // If the key is found, return its index
    if (arr[prev] === key)
      return prev;
    return -1;
  }
  
  let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
  let key = 55;
  
  // Find the index of 'key' using Jump Search
  let index = jumpSearch(arr, key);
  
  // Print the index where 'key' is located
  console.log(`Number ${key} is at index ${index}`);
  