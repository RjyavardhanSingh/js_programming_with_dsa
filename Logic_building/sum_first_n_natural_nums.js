let prompt = require("prompt-sync")();
let n = Number (prompt("Please enter an number: "));
let sum = 0;

if(isNaN(n) || n<0){
    console.log("Please enter a valid input")
} else{
    //brute force approach
    // for(let i = 1; i<=n; i++){
    //     sum+=i;
    // }
    // console.log(sum);


    // formula approach
    console.log((n*(n+1))/2)
}