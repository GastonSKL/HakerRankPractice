// A password string, pwd, consist of binary character (0s and 1s). 
// A cyber security expert is trying to determine the minimum number of changes required to make the password secure. 
// To do so, it must be divided into substrings of non-overlapping, even length substrings. 
// Each substring can only contain 1s or 0s, not a mix.

// Find the minimun number of characters that must be flipped in the password string, i.e. changed from 0 to 1 or 1 to 0 to allow the string to be divided as described.

// Example pws = "1110011000";

// The two substrings have lengths 8 and 2 respectively. Since both lengths are even, the division is valid, so the answer is 3.

// Complete the function getMinFlips.
// It takes the following arguments: str pwd: the binary string
// Returns an int, the minimum number of flips to make the division

// Constrains
// .2 <= pwd <= 10∧5
// .The length of pwd is even
// .pwd contains only 1s and 0s

function getMinFlips(pwd) {
    let flips = 0;
    let ones = 0;
    let zeros = 0;

    for (let i = 0; i < pwd.length; i++) {
        if (pwd[i] === '1') {
            ones++;
        } else {
            zeros++;
        }

        if ((i + 1) % 2 === 0) {
            flips += Math.min(ones, zeros);
            ones = zeros = 0;
        }
    }

    return flips;
}