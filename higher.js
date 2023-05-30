const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('insert value 1: ', (first) => {
  rl.question('insert value 2: ', (second) => {

    const value1 = parseInt(first)
    const value2 = parseInt(second)

    const max = value1 > value2 ? value1 : value2 ;
    console.log('Highest value:', max);
  rl.close();
  })
})
