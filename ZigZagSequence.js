//In this challenge, the task is to debug the existing code to successfully execute all provided test files.
// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k
//lements in the sequence are in increasing order and the last k elements are in decreasing order, where k = (n + 1)/ 2 You need to find the lexicographically smallest zig zag sequence of the given array.

let a = [2,3,5,1,4];

function processData(input) {
    const arr = input.split("\n")[1].split(" ").map(Number);
    
    input.sort((a,b) => a - b);
    let firstArr = arr.slice(0, (arr.length + 1) / 2);
    let secArr = arr.slice((arr.length + 1) / 2, a.length).sort((a,b) => b - a);
    let newArr = [...firstArr, ...secArr];
    console.log(newArr.join(' '))
    return newArr;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    const result = processData(input);
    console.log(result.join(' '));
});