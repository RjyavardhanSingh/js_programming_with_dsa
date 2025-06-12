console.log(isPrime(input)?"is Prime":"not prime")

function isPrime(n){
    if(n<=1) return false;
    if(n===2) return true;
    if(n%2===0) return false
    
    for(let i = 3; i<=Math.sqrt(input); i+=2){
        if(input%i===0) return false
    }
    
    return true;
}

//brute force approcah
// let input = prompt("Please enter a number: ");

// if (input === null) {
//     console.log("Operation cancelled");
// } else {
//     let n = Number(input);
//     let isPrime = false;
//     if (isNaN(n) || n <= 0) {
//         console.log(isNaN(n) ? "Invalid input" : "Please enter a +ve number or greater than 0");
//     } else {
//         for(let i = 2; i<=Math.floor(n/2); i++){
//             if(n%i===0){
//                 isPrime = true;
//                 break;
//             }else{
//                 continue;
//             }
//         }
//         console.log(isPrime?"it is not prime":"it is prime")
//     }
// }
