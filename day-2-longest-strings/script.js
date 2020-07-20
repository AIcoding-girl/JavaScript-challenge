// Given an array of strings, return another array containing all of its longest strings

function allLongestStrings(arr) {
    // find the longest length
    const longestWords = [];
    let longestLength = 0;

    for(let word of arr) {
        longestLength = word.length > longestLength ? word.length : longestLength;
    }

    for(let word of arr) {
        if(longestLength === word.length) {
            longestWords.push(word);
        }
    }

    // return the longest string
    
    console.log(longestWords);
    // return longestLength;
    // return longestWords;
}

const strings = ["mico", "dennie", "angeli", "apolllo"];
allLongestStrings(strings);