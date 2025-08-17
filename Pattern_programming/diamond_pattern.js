function diamond(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) row += ' ';
    for (let k = 1; k <= 2 * i - 1; k++) row += '*';
    console.log(row);
  }
  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) row += ' ';
    for (let k = 1; k <= 2 * i - 1; k++) row += '*';
    console.log(row);
  }
}
// Example: diamond(5);
diamond(5);