const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

let totalValue = num1 + num2 + num3;
let averageValue = totalValue / 3;
let result = totalValue - averageValue;

console.log(`${totalValue}\n${averageValue}\n${result}`);
