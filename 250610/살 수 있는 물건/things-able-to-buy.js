const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const money = parseInt(input);

if (money >= 3000) {
  console.log("book");
} else if (money >= 1000) {
  console.log("mask");
} else {
  console.log("no");
}
