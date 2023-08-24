/*
 * Complete the 'subsetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMinFlips(pwd) {
    let flipsToMake0 = 0;
    let flipsToMake1 = 0;

    for (let i = 0; i < pwd.length; i += 2) {
        if (pwd[i] !== '1') {
            flipsToMake0++;
        } else {
            flipsToMake1++;
        }

        if (pwd[i + 1] !== '0') {
            flipsToMake1++;
        } else {
            flipsToMake0++;
        }

        if(flipsToMake1 % flipsToMake0 == 0) break
    }

    return Math.min(flipsToMake0, flipsToMake1);
}

// Example usage
const pwd = "1110011000";
console.log(getMinFlips(pwd)); // Output: 3

