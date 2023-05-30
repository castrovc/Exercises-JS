// TRIANGLE
// Area = (base * height) / 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ("Base value: ",(value1) => {
    rl.question("Height value: ", (value2) => {
      const base = parseInt(value1);
      const height = parseInt(value2);

      const area = (base * height) / 2;
      console.log("The area triangle is:", area);
      rl.close();
    });
  });
