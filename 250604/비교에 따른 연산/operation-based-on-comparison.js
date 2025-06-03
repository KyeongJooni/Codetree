const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
const N1 = parseInt(input[0]);
const N2 = parseInt(input[1]);
if (N1 > N2) {
  console.log(N1*N2);
} else {
  console.log(parseInt(N2/N1));
}
