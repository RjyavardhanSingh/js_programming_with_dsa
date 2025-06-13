let prompt = require("prompt-sync")();

let n = Number(prompt("Please enter a number: "));

for(let i = 0; i<n; i++){
    let char = 65;

    for(let j = 0; j<=i; j++){
        process.stdout.write(String.fromCharCode(char++)+" ")
    }
    console.log();
}