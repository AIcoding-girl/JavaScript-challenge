// Largest number

// For example, for n = 2, the output should be 99

/*
Hints:
concat()
parseInt()
*/

function largestNumber(num) {
    // let placeholder = '';

    // for (let i = 0; i < num; i++) {
    //     placeholder = placeholder.concat('9');
    // }

    const placeholder = '9'.repeat(num);

    return parseInt(placeholder);
}

const num = 3;
const result = largestNumber(num);

console.log("result:", result);