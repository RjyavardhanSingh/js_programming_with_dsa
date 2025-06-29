//rotate all elements in left of a array:
let prompt = require("prompt-sync")();

let arr = [1,2,3,4,5]
let numberOfRotations = prompt("Enter the number of rotations you want to perform on the array: ");

rotate_the_array_to_left(numberOfRotations)

function leftroattion(arr){
    let temp = arr[0];
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    
}

 function rotate_the_array_to_left(n){
    for(let i = 0; i<n; i++){
        leftroattion(arr);
    }
    console.log(arr);
 }