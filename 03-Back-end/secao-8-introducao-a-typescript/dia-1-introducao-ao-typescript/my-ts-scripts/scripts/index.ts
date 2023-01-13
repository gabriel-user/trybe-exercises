const readLineSync = require('readline-sync');
const scripts = ['area', 'capacity', 'length', 'mass', 'volume'];

const script = readLineSync.keyInSelect(scripts, 'Qual conversão realizar? ');
require(`./${scripts[script]}`);