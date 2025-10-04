const fs = require("fs");
const a = Number(fs.readFileSync(0, "utf8").trim());

if (a % 13 === 0 || a % 19 === 0) {
  console.log("True");
} else {
  console.log("False");
}
