// reverse the array without using extra space

let arr = [20, 2, 3, 4];
rev_arr(arr);



function rev_arr(arr) {
    let i = 0;
    let j = arr.length -1;
    while(i<j){
        [arr[i], arr[j]] = [arr[j], arr[i]]; // any method can be used to swap elements. destructing assignment is used here
        i++;
        j--;
    }
    console.log(arr);
    
}