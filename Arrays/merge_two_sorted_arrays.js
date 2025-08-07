let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2));

function mergeSortedArrays(arr1, arr2) {
    let temp_arr = [];

    let i=j=k=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            temp_arr[k++] = arr1[i++];
        } else {
            temp_arr[k++] = arr2[j++]
        }
    }

    while (i<arr1.length){
        temp_arr[k++] = arr1[i++]
    }

    while (j<arr2.length) {
        temp_arr[k++] = arr2[j++]
    }

    return temp_arr;
}