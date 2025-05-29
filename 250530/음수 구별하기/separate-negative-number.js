const fs = require("fs");
let num1 = Number(fs.readFileSync(0).toString().trim());

console.log(num1);
if(num1<0){
    console.log("minus");
}