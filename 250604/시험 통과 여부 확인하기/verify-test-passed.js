const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const N = parseInt(input, 10);
if (N >= 80) {
  console.log("pass");
} else {
  const need = 80 - N;
  console.log(`${need} more score`);
}
