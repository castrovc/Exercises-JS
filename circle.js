//CIRCLE
// Area = π * radius^2
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question('insert radio of circle: ', (radiovalue) => {
    const radio = parseInt(radiovalue)
    const area = Math.PI * Math.pow(radio, 2);
    
    console.log("The area of circle is:", area);
    rl.close()
})