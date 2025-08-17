let str = " eve";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

let i=0, j=str.length-1;
let ispallindrome = true;
while(i<j){
    if(str.charAt(i) !== str.charAt(j)){
        ispallindrome = false;
        break;
    }
    i++;
    j--;
}

ispallindrome?console.log("Palindrome"):console.log("Not Palindrome");
