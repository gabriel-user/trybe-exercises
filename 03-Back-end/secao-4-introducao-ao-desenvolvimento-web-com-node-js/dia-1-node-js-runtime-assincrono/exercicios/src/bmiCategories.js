const bmiCategories = {
  'Abaixo do peso (magreza)': {
    min: 0,
    max: 18.4
  },
  'Peso normal': {
    min: 18.5,
    max: 24.9
  },
  'Acima do peso (sobrepeso)': {
    min: 25,
    max: 29.9,
  },
  'Obesidade grau I': {
    min: 30,
    max: 34.9
  },
  'Obesidade grau II': {
    min: 35,
    max: 39.9
  },
  'Obesidade graus III e IV': {
    min: 40,
    max: 1000
  }
};

module.exports = { bmiCategories };