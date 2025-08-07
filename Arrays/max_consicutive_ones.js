let arr = [1, 1, 0, 1, 1, 1];

console.log(maxconsecutiveones(arr));


function maxconsecutiveones(arr) {
    let count  = 0;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 1){
            count++
        } else{
            break;
        }
    }
    return count;
}