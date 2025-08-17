let str = "HelloWorld";
let toggledStr = "";

for (let char of str) {
    let code = char.charCodeAt(0); 
    if (code >= 65 && code <= 90) { 
        toggledStr += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
        toggledStr += String.fromCharCode(code - 32);
    } else {
        toggledStr += char; 
    }
}

console.log(toggledStr); 
