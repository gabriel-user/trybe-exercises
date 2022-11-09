const doMath = async (a, b, c) => {
  const params = [a, b, c];
  return new Promise((resolve, reject) => {
    if (params.some((param) => typeof param !== 'number')) {
      reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
};

const main = async () => {
  try {
    const result = await doMath(10, 10, 10);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

main();
