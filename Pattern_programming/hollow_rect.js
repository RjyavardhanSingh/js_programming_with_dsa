function hollowRectangle(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= columns; j++) {
      if (i === 1 || i === rows || j === 1 || j === columns) {
        row += '* ';
      } else {
        row += '  ';
      }
    }
    console.log(row);
  }
}
// Example: hollowRectangle(5, 5);
hollowRectangle(5, 5);