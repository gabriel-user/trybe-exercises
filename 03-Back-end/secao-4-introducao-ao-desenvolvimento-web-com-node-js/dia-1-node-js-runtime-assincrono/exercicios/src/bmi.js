const readline = require('readline-sync');

const handleBmi = (weight, height) => {
  const heightInCentimeters = Number(height) / 100;
  const heightElevated = heightInCentimeters * heightInCentimeters;
  const bmi = Number(weight) / heightElevated;

  return bmi;
}

const main = () => {
  const weight = readline.questionFloat('What your weight? ');
  const height = readline.questionFloat('What your height? ');
  const bmi = handleBmi(weight, height);

  console.log(`Your BMI is ${ bmi }`);
}

main();

module.exports = { handleBmi };