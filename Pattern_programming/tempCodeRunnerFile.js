let prompt = require("prompt-sync")();

let n = Number(prompt("Please enter a number: "));

for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        if(i==j || i+j==n-1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log();
    
}