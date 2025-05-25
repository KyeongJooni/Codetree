const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = parseFloat(input);
console.log(n.toFixed(2));
