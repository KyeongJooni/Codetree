const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const [gender, age] = input;

if (gender === 0) {
  if (age >= 19) console.log("MAN");
  else console.log("BOY");
} else {
  if (age >= 19) console.log("WOMAN");
  else console.log("GIRL");
}
