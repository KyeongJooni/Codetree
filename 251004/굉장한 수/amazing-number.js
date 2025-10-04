const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());

const isAmazing =
  (N % 2 === 1 && N % 3 === 0) || (N % 2 === 0 && N % 5 === 0);

console.log(isAmazing ? "true" : "false");
