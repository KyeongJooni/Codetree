const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = input.repeat(8);
console.log(result);