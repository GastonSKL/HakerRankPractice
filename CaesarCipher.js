/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

let s = "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M";
let k = 27; 

function caesarCipher(s, k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];

        if (!alphabet.includes(currentLetter.toLowerCase())) {
            newStr += currentLetter;
            continue;
        }

        let isUpperCase = currentLetter === currentLetter.toUpperCase();
        let currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
        let newIndex = (currentIndex + k) % 26;

        if (newIndex < 0) newIndex += 26;

        if (isUpperCase) {
            newStr += alphabet[newIndex].toUpperCase();
        } else {
            newStr += alphabet[newIndex];
        }
    }

    return newStr;
}

console.log(caesarCipher(s,k))