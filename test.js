let prompt = require("prompt-sync")();

console.log("Enter the number of rows: ");
let n = Number(prompt("Please enter a number: "));
let rows = n; 

for(let i = 1; i <= rows; i++){
   
    for(let j = 1; j <= (rows - i + 1); j++){
        process.stdout.write("*");
    }
    console.log();
}