/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {

    A.sort(function(a, b){return a-b});
    B.sort(function(a, b){return b-a});
    
    for (let i = 0; i < A.length; i++) {

        if (A[i] + B[i] < k) {return "NO"};

    }

    return "YES";
}