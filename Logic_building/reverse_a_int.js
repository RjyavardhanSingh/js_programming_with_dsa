function reverseInt(n){
    let revint = 0;
     console.log(12.3%10)
    while(n>0){
        let digit = n%10;
        n = Math.floor(n/10);
        revint = (revint*10)+digit;
    }
    
   
    return revint;
}
