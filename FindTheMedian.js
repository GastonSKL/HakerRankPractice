function findMedian(arr) {
    arr.sort(function(a, b) {return a - b});
    return arr[Math.floor(arr.length/2)];
}
