/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of alphabet) {
     if (!s.toLowerCase().includes(letter)) {
        return "not pangram";
     }
   }
   
   return "pangram";
 }

 console.log(pangrams("We promptly judged antique ivory buckles for the prize"))
 console.log(pangrams("We promptly judged antique ivory buckles for the prize"))