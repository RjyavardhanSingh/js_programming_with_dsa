let n = 4;
let pattern = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        pattern += ' ';
    }
    for (let k = 1; k <= i; k++) {
        pattern += '* ';
    }
    pattern += '\n';
    
}

console.log(pattern);