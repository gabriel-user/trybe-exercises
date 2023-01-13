"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readLineSync = require('readline-sync');
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
function exec() {
    const value = readLineSync.question('Qual a capacidade? ');
    const baseUnit = readLineSync.question('Qual a unidade base? ');
    const baseUnitForConversion = readLineSync.question('Qual a unidade para conversão? ');
    const result = convert(value, baseUnit, baseUnitForConversion);
    console.log(`${value}${baseUnit} é igual a ${result}${baseUnitForConversion}`);
}
exports.exec = exec;
;
exec();
