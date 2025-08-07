let arr1 = [1, 3, 8, 8.1];
let arr2 = [7, 9, 10, 11];

console.log(meadianOfTwoSortedArrays(arr1, arr2));

function mergesortedArrays(arr1, arr2) {
    let newArr = [];

    let i = 0, j = 0;

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++;
        } else{
            newArr.push(arr2[j]);
            j++;
        }
    } 
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr
}

function meadianOfTwoSortedArrays(arr1, arr2) {
    let temp = mergesortedArrays(arr1, arr2);
    let mid = Math.floor(temp.length / 2);
    let median;
    if(temp.length % 2 === 0){
        median = (temp[mid - 1] + temp[mid])/2
    } else{
        median = temp[mid]
    }

    return median;

}