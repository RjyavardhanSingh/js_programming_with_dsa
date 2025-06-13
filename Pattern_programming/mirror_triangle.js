let pompt = require("prompt-sync")();

let n = Number(pompt("Please enter a number: "));






// number trinangle mirrored
/*
     1
    12
   123
  1234
 12345
*/

// for(let i=0; i<n;i++){

//     for(let j=0; j<n-i; j++){
//         process.stdout.write(" ");
//     }
//     for(let k=0; k<=i; k++){
//         process.stdout.write((k+1).toString());
//     }
//     console.log();
// }






// mirroe trinangle
/*
     *
    **
   ***
  ****
 *****
*/
// for(let i=0; i<n;i++){

//     for(let j=0; j<n-i; j++){
//         process.stdout.write(" ");
//     }
//     for(let k=0; k<=i; k++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// inverted mirroe trinangle
/*
 *****
  ****
   ***
    **
     *
*/

for(let i = 0; i<n; i++){
    
    for(let k = 0; k<i; k++){
        process.stdout.write(" ");
    }
    for(let j = 0; j<(n-i); j++){
        process.stdout.write("*");
    } 
    
    console.log();
}