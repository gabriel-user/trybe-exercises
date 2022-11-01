const handleImc = (weight, height) => {
  const heightInCentimeters = height / 100;
  const heightElevated = heightInCentimeters * heightInCentimeters;
  const imc = weight / heightElevated;

  return imc;
}

module.exports = { handleImc };