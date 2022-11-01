const handleImc = (weight, height) => {
  const heightInCentimeters = Number(height) / 100;
  const heightElevated = heightInCentimeters * heightInCentimeters;
  const imc = Number(weight) / heightElevated;

  return imc;
}

console.log(handleImc(105, 191));

module.exports = { handleImc };