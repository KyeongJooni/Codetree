const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
console.log(m, n);