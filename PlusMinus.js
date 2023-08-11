let arr = [-4,3,-9,0,4,1];
function plusMinus(arr) {

    arr.sort();
    let zeros = 0;
    let nigatives = 0;
    let positives = 0;

    for (let i = 0; i < arr.length; i++) {
            
        if(arr[i] > 0) positives++;
        if(arr[i] < 0) nigatives++;
        if(arr[i] == 0) zeros++;

        
    }

    return console.log("zeros: " + (zeros/arr.length).toFixed(6) +",positives: " + (positives/arr.length).toPrecision(6) + ", negatives: "+ (nigatives/arr.length).toPrecision(6));

}

plusMinus(arr);