function secondlargestele(arr) {
    // Handle arrays with less than 2 elements
    if (arr.length < 2) {
        console.log('Array needs at least 2 elements');
        return;
    }
    
    // Initialize with lowest possible values
    let max = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;
    
    // Process all elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            // Found new max, old max becomes second max
            secondMax = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > secondMax) {
            // Found new second max
            secondMax = arr[i];
        }
    }
    
    // Check if a second max was found
    if (secondMax === Number.MIN_SAFE_INTEGER) {
        console.log('No second largest element found (all elements are equal)');
    } else {
        console.log('Second largest element of the array is: ' + secondMax);
    }
}

let arr = [10, 30, 40, 40, 40];
secondlargestele(arr);