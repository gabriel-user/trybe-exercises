const readline = require('readline-sync');

const handleFibonacci = (n) => {
  if (n <= 0) throw Error('Precisa ser um número inteiro maior que 0');
  let fibonacci = [1, 1];

  for (index = 3; index <= n; index += 1) {
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
  }

  return fibonacci.forEach((i) => console.log(i));
};

const main = () => {
  const numberFibonacci = readline.questionInt('Qual tamanho da sequência? ');
  console.log(handleFibonacci(numberFibonacci));
};

main();
