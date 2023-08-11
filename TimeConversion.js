let scores = [12,24,10,24];

function breakingRecords(scores) {

    let minScore = scores[0];
    let maxScore = scores[0];

    let min = 0;
    let max = 0;

    for (let i = 0; i < scores.length; i++) {
        
        if(minScore < scores[i]){
            minScore = scores[i];
            min++;
        }
        if(maxScore > scores[i]){
            maxScore = scores[i];
            max++;
        }

    }
    let arrayReturned = [min, max];
    return arrayReturned;


}