let prompt = require("prompt-sync")();

let arr = [1,2,3,4,5];

let numberOfRotations = prompt("Enter the number of rotations you want to perform on the array: ");

rotate_the_array_to_right(numberOfRotations);

function rightRotation(arr) {
    let temp = arr[arr.length - 1];

    for(let i = arr.length - 1; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
}

function rotate_the_array_to_right(n) {
    for(let i = 0; i<n; i++){
        rightRotation(arr);
    }
    console.log(arr);
}