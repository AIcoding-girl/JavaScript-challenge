// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters

/*
Hints:
join();
reverse();
toLowerCase();
split();
*/

function caseInsensitivePalindrome(str) {
    // make str case-less
    const caselessStr = str.toLowerCase();

    // compare it forwards and backwards

    // solution 1:
    // const reversedCaselessStr = caselessStr.split('').reverse().join('');

    // alternative way:
    let reversedCaselessStr = '';

    for (let i = caselessStr.length -1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }

    // return result
    return caselessStr === reversedCaselessStr;
}

const str = "anna";
const result = caseInsensitivePalindrome(str);

console.log("result:", result);