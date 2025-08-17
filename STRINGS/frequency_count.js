let s = "hello world";
let frequency = {};

for (let char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

// find the max frequency character
let maxFreqChar = '';
let maxFreq = 0;

for (let char in frequency) {
    if (frequency[char] > maxFreq) {
        maxFreq = frequency[char];
        maxFreqChar = char;
    }
}

console.log(`Max frequency character: ${maxFreqChar} (${maxFreq} times)`);