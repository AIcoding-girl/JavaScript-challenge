// Given an array of strings, return another array containing all of its longest strings

function longestString(arr) {
    // find the longest length
    let longestLength = 0;

    for(let word of arr) {
        longestLength = word.length > longestLength ? word.length : longestLength;
    }

    // return the longest string
}

longestString("mico", "dennie", "angeli", "apolllo");