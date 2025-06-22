// place all zeros in the start of the the array and all ones in the end of the array

let arr = [1,1,1,1,0,0,0,0];
ones_and_zeros(arr);

function ones_and_zeros(arr) {
    let i = 0;
    let j = 0;
    while(i<arr.length){
        if(arr[i] === 0){
            
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
        i++;
    }
    console.log(arr);
    
}