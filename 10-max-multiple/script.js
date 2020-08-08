/*
Given a divisor and a bound, find the largest integer N such that:
1) N is divisible by divisor;
2) N is less than equal to bound;
3) N is greater than 0.

For example,
for divisor = 3 and bound = 10, the output should be maxMultiple(divisor, bound) = 9;
the largest integer divisible by 3 and not greater than 10 is 9

*/

function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;

    return bound - remainder;
};

const divisor = 4;
const bound = 21;

const result = maxMultiple(divisor, bound);
console.log("result:", result);