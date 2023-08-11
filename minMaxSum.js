let arr = [1,3,5,7,9];
console.log(arr);
function miniMaxSum(arr) {
    
    let min = 0;
    let max = 0;
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
         min += arr[i];
        
    }

    for (let i = arr.length - 1; i >= (arr.length - (arr.length - 1)); i--) {
        max += arr[i];
       
   }

   return console.log(min + "  " + max);

}

miniMaxSum(arr)