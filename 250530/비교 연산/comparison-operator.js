const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

if (num1 >= num2) {
    console.log("1");
} else {
    console.log("0");
}

if (num1 > num2) {
    console.log("1");
} else {
    console.log("0");
}

if (num1 <= num2) {
    console.log("1");
} else {
    console.log("0");
}

if (num1 < num2) {
    console.log("1");
} else {
    console.log("0");
}

if (num1 == num2) {
    console.log("1");
} else {
    console.log("0");
}

if (num1 != num2) {
    console.log("1");
} else {
    console.log("0");
}
