// Number Factorial

// Return the factorial of the provided integer
// Factorials are often represented with the shorthand notation!
// For example, 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialNumber(num) {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum *= i;
    }

    return sum;
};

const num = 6;
const result = factorialNumber(num);
console.log("result:", result);