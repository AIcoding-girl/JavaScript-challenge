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
    const reversedCaselessStr = caselessStr.split('').reverse().join('');

    // return result
    return caselessStr === reversedCaselessStr;
}

const str = "anna";
const result = caseInsensitivePalindrome(str);

console.log("result:", result);