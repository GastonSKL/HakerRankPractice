let strings = ['ab','ab','abc'];
let queries = ['ab','abc','bc'];


function matchingStrings(strings, queries) {
    const memory = {};

    for(const string of strings) memory[string] = (memory[string] || 0) + 1;
    
    return queries.map(query => memory[query] || 0);
}

console.log(matchingStrings(strings, queries));