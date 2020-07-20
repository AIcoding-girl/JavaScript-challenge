// Return an array of sums of even and odd numbers in an array

function alternatingSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    console.log ([evenSum, oddSum]);
    // return [evenSum, oddSum];
}

const nums = [50, 60, 60, 45, 70];
alternatingSums(nums);