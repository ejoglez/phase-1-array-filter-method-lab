function findMatching(array, string){
    const results = array.filter(element => string.toLowerCase() === element.toLowerCase());
    return results;
}

function fuzzyMatch(array, string){
    const fuzzyResults = array.filter(element => element.toLowerCase().indexOf(string.toLowerCase()) === 0 );
    return fuzzyResults;
}

function matchName(array, string){
    const nameResults = array.filter(element => element.name.toUpperCase() === string.toUpperCase());
    return nameResults;
}