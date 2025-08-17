function jumbledNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    let num = i;
    for (let j = 1; j <= i; j++) {
      row += num + ' ';
      num += n - j;
    }
    console.log(row);
  }
}
// Example: jumbledNumberPattern(4);
jumbledNumberPattern(4);