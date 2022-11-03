const readline = require('readline-sync');

const handleBMI = (weight, height) => {
  const heightInMeters = Number(height) / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = Number(weight) / heightSquared;

  return bmi.toFixed(2);
};

const handleBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso (magreza)';
  if (bmi >= 18.5 && bmi < 25) return 'Peso normal';
  if (bmi >= 25.0 && bmi < 30) return 'Acima do peso (sobrepeso)';
  if (bmi >= 30.0 && bmi < 35) return 'Obesidade grau I';
  if (bmi >= 35.0 && bmi < 40) return 'Obesidade grau II';
  return 'Obesidade graus III e IV';
};

const main = () => {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  const bmi = handleBMI(weight, height);
  const bmiCategory = handleBMICategory(bmi);

  console.log(`Your BMI is ${bmi} - ${ bmiCategory }`);
};

main();
