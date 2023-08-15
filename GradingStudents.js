/*
/*
//The function is expected to return an INTEGER_ARRAY.
//The function accepts INTEGER_ARRAY grades as parameter.
//Less than 40 is a failing grade, DO NOT ROUND
//Round every number to the next 5 multiple if the difference is less than 3
*/

let grades = [4,73,67,38,33];

function gradingStudents(grades) {

    for (let i = 0; i < grades.length; i++) {

            let nextMultiple = Math.ceil(grades[i]/5)*5;
            if((nextMultiple - grades[i] < 3) &&(nextMultiple >= 40)){
                grades[i] = nextMultiple;
            }

    }

    return grades;
}

console.log(gradingStudents(grades));  