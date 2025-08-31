const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); // 표준 입력

const temperature = parseInt(input);

if (temperature < 0) {
  console.log("ice");
} else if (temperature >= 100) {
  console.log("vapor");
} else {
  console.log("water");
}
