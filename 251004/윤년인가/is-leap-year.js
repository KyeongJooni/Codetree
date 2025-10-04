const fs = require("fs");
const Y = Number(fs.readFileSync(0, "utf8").trim());

const isLeap = (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
console.log(isLeap ? "true" : "false");
