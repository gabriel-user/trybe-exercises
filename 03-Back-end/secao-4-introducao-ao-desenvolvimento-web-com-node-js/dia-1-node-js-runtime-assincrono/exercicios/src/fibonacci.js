const readline = require('readline-sync');

const handleFibonacci = (n) => {
  if (n <= 0) throw Error('Precisa ser um número inteiro maior que 0');

  let fibonacci = [0, 1];

  for (index = 2; index <= n; index += 1) {
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
  }

  return fibonacci;
};

const x = async (a, b, c) => {
  const params = [a, b, c];
  if (params
    .some((param) => typeof param !== 'number')
  ) throw new Error('Informe apenas números');

  
};

const main = () => {
  const numberFibonacci = readline.questionInt('Qual tamanho da sequência? ')
  console.log(handleFibonacci(numberFibonacci));
};

main();