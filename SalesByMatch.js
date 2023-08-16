/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.//

let n = 7;
let ar = [1,2,1,2,1,3,2];

function sockMerchant(n, ar) {

    let pairs = 0;
    //For this problem I will be using the Set data structure, because it doesn't allow duplicate values. 
    let set = new Set();
    for (let i = 0; i < n; i++) {
        //I iterate over the given array, check if the set has the value. In case that it doesn't, it adds the value to the set, otherwise, it means that it has the value, meaning 
        //that a pair has been foun, so I add to the count. 
        if(!set.has(ar[i]))
        {
            set.add(ar[i]);
        }
        else
        {
            set.delete(ar[i]);
            pairs++;
        }
    }
    return pairs;
}

console.log(sockMerchant(n,ar));