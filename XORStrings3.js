let a = "10101";
let b = "00101";
const XORStrings = (a, b) =>
{
    let res = "";

    for (let i = 0; i < a.length; i++) {

        if(a.charAt(i) == b.charAt(i)){
            res += "0";
        }else{
            res += "1";
        }

    }

    return res;
}

console.log(XORStrings(a, b));