//MAX VALUE IN ARRAY
const readline = require('readline')

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
})

rl.question ('Insert first value: ', (number1) => {
  rl.question('insert second value: ', (number2) => {
    rl.question('insert third value: ', (number3) => {
        rl.question('insert fourth value: ', (number4) => {
            rl.question('insert fifteenth value: ', (number5) => {
                
                const first = parseInt(number1)
                const second = parseInt(number2)
                const third = parseInt(number3)
                const fourth = parseInt(number4)
                const fifteenth = parseInt(number5)
                const array = []
                const numbers = [first, second, third, fourth, fifteenth]
                const arraynumbers = array.concat(numbers)
                const maxNumber = Math.max(...arraynumbers)
                console.log("El número más grande es:", maxNumber)
                rl.close()
            })
        })
    })
  })

})


