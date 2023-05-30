const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Start number: ", (first) => {
rl.question("End number: ", (last) => {

const start = parseInt(first)
const end = parseInt(last)

const numbersArray = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
    );
    const total = numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
    );

    console.log("The sum of the range is:", total);
    rl.close();
    });
});
