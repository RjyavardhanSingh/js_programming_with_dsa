let prompt = require("prompt-sync")();
let n = Number(prompt("Please enter a number: "));

console.log(strong(n)?"Number is Strong":"Number is not strong")

function fact(n){
    let fact = 1;
    
    while(n>0){
        fact = fact*n--;
    }
    
    return fact;
}

function strong(n){
    let sum = 0;
     let temp = n
    while(temp>0){
        let rem = temp%10;
        sum = sum + fact(rem);
        temp = Math.floor(temp/10);
    }
    if(sum === n) return true;
    
    return false;
    
}