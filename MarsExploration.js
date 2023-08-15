/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s = "SOSSPSSQSSOR";

//This function split the string that I pass into an array every 3 spaces.
const splitString = (string) =>{
    const chunks = [];
    for (let i = 0; i < string.length; i += 3) {
    chunks.push(string.slice(i, i + 3));
  }
  return chunks;
} 

function marsExploration(s) {
    let count = 0;
    //with this operator I create an array with all the words of the message
    const array = [...splitString(s)];
    //With this loop I check if the first char of the string is an S, the second an O and the third an S againg, else i up the count by one.
    for (let string of array)
    {
        if(string.charAt(0).toUpperCase() != "S") count++;
        if(string.charAt(1).toUpperCase() != "O") count++;
        if(string.charAt(2).toUpperCase() != "S") count++;
    }
    return count;
}


console.log(marsExploration(s));