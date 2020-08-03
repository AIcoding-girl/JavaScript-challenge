/*
Find the leftmost digit that occurs in a given string
For example, for string "var_1_Int", the output should be '1'

Hints:
split()
includes()

or regular expressions
*/

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');

    for (const char of chars) {
        if (strNums.includes(char)) {
            return char;
        }
    }
}

const str = "var_1__Int2";
const result = firstDigit(str);

console.log("result:", result);