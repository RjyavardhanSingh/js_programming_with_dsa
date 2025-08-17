let str = "Hello, World!";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
console.log(rev);