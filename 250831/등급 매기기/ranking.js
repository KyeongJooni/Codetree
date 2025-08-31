const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const value = parseInt(input);

if (value >= 90) {
  console.log("A");
} else if (value >= 80) {
  console.log("B");
} else if (value >= 70) {
    console.log("C");
} else if (value >= 60) {
    console.log("D");
} else {
    console.log("F");
}