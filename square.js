// SQUARE
// area = side * side
const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
})

rl.question('insert side of square: ', (sidesquare) => {
    const side = parseInt(sidesquare)

const area = (side * side)
console.log("The area square is:", area);
rl.close()
})