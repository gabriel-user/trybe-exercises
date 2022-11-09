const readline = require('readline-sync');
const { bmiCategories } = require('./bmiCategories');

const handleBMI = (weight, height) => {
  const heightInMeters = Number(height) / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = Number(weight) / heightSquared;

  return bmi.toFixed(2);
};

const handleBMICategory = (bmi) => {
  const categoriesKeys = Object.keys(bmiCategories);
  
  const categoryResult = categoriesKeys.find((key) => {
    const { min, max } = bmiCategories[key];
    return bmi >= min && bmi <= max;
  });
  
  return categoryResult;
};

handleBMICategory(50);

const main = () => {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  const bmi = handleBMI(weight, height);
  const bmiCategory = handleBMICategory(bmi);

  console.log(`Your BMI is ${bmi} - ${ bmiCategory }.`);
};

main();
