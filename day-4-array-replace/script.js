// Given an array of integers, replace all the occurences of elemToReplace with substitutionElem

function arrayToReplace(array, elemToReplace, substitutionElem) {
    // iterate through list
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elemToReplace) {
            array[i] = substitutionElem;
        }
    }

    // check for matching number

    // update the match

    // return value
    return array;
}

const array = [1, 2, 3];
const elemToReplace = 1;
const substitutionElem = 3;

const result = arrayToReplace(array, elemToReplace, substitutionElem);

console.log("result: ", result);