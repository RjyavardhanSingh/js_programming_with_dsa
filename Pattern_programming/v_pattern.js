let prompt = require("prompt-sync")();

let n = Number(prompt("Please enter a number: "));

for(let i = 0; i<=n; i++){
    for(let j = 0; j<2*n+1; j++){
        if(i==j || i+j==2*n){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log();
    
}