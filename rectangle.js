//RECTANGLE
// Area = Base * Height

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("base: ", (valuebase) => {
    rl.question("height: ", (valueheight) => {
    
const base = parseInt(valuebase) 
const height = parseInt(valueheight)
    
const area = base * height

console.log("Area of Rectagle is :", area)
rl.close()
    })
})

