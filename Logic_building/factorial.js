let prompt = require("prompt-sync")();
let n = Number(prompt("Please enter a number: "));

console.log(fact(n));



function fact(n){
    let fact = 1;
    
    while(n>0){
        fact = fact*n--;
    }
    
    return fact;
}

