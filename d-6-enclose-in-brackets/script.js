// Given a string, enclose it in round brackets

function encloseInBrackets(str) {
    // ES5:
    const solution1 = '(' + str + ')';

    // ES6
    const solution2 = `(${str})`;

    // concatenation
    const solution3 = '('.concat(str, ')');

    return solution1;

}

const str = "beautiful day";
const result = encloseInBrackets(str);

console.log("result:", result);