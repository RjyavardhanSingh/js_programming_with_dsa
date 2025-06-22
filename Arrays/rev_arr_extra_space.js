// reverse array with the help of extra space or another array

let arr = [1,2,3,4,5]

rev_arr(arr);

function rev_arr(arr){
    let temp = new Array(arr.length);
    let j = 0;

    for(let i = arr.length - 1; i>=0; i--){
        temp[j++] = arr[i]
    }
    console.log(temp);
    
}

