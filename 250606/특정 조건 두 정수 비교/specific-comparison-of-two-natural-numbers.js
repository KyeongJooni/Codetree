const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
const N1 = Number(input[0]);
const N2 = Number(input[1]);

if (N1 < N2 && N1 == N2) { 
  console.log("1 1");
} else if(N1 < N2 && N1 != N2){
    console.log("1 0");
} else if( N1 >= N2 && N1 == N2){
    console.log("0 1");
}  else {
    console.log("0 0");
}
