const fs = require("fs");
a = fs.readFileSync(0).toString().trim();
console.log(`Your score is ${a} point.`);