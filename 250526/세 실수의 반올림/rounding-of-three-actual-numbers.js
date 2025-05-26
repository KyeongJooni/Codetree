const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseFloat(input[0]);
const m = parseFloat(input[1]);
const l = parseFloat(input[2]);

console.log(n.toFixed(3));
console.log(m.toFixed(3));
console.log(l.toFixed(3));