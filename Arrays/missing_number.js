let prompt = require("prompt-sync")();

let arr = [3, 0, 1, 4, ];

let missingNumber = findMissingNumber(arr);

console.log("The missing number is: " + missingNumber);

function findMissingNumber(arr) {
    let n = arr.length;
    let arraysum = 0;

    let sum = (n*(n+1))/2;

    for(let i = 0; i<n; i++){
        arraysum += arr[i];
    }

    return sum - arraysum;
}
