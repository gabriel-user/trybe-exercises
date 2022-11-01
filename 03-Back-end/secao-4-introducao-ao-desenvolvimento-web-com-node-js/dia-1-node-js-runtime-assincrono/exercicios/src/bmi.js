const readline = require('readline-sync');

const handleBmi = (weight, height) => {
  const heightInCentimeters = Number(height) / 100;
  const heightElevated = heightInCentimeters * heightInCentimeters;
  const bmi = Number(weight) / heightElevated;

  return bmi;
};

const bmiCategory = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso (magreza)';
  if (bmi >= 18.5 && bmi <= 24.9) return 'Peso normal';
  if (bmi >= 25.0 && bmi <= 29.9) return 'Acima do peso (sobrepeso)';
  if (bmi >= 30.0 && bmi <= 34.9) return 'Obesidade grau I';
  if (bmi >= 35.0 && bmi <= 39.9) return 'Obesidade grau II';
  if (bmi >= 40.0) return 'Obesidade graus III e IV';
};

const main = () => {
  const weight = readline.questionFloat('What your weight? ');
  const height = readline.questionFloat('What your height? ');
  const bmi = handleBmi(weight, height);
  const category = bmiCategory(bmi);

  console.log(`Your BMI is ${bmi} - ${ category }`);
};

main();

module.exports = { handleBmi };
