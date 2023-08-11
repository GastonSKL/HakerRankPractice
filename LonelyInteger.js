let a = [1,2,3,4,3,2,1];


function lonelyinteger(a) {
    return a.sort(function (a, b) {return a - b}).filter((x, i) => x !== a[i - 1] && x !== a[i + 1] )
}



console.log(lonelyinteger(a));