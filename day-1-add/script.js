function addNums(...nums) {  // concatenates all the input numbers into array
    let sum = 0;
    nums.forEach((num) => sum += num);

    return sum;
    // console.log(sum);
}

// Test case and function call
addNums(1, 2, 3, 8);