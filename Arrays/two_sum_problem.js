// classic two sum problem retrun psair of elements that has sum equls to the target
// brute force appraoch
let arr = [1,2,3,4,5,6]
let target = 9;

console.log(twoSum(arr, target));


function twoSum(arr, target) {
    let sum = 0 ;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result.length > 0 ? result : "No pairs found";
}