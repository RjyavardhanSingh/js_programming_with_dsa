let prompt = require("prompt-sync")();

let input = prompt("Please enter a valid number: ");
let n = Number(input);

for(let i = 0; i<n; i++){
    for(let j = 0; j<(n-i); j++){
        process.stdout.write("*");
    } console.log();
}

