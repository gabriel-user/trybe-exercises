"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readLineSync = require('readline-sync');
const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
exports.convert = convert;
;
function exec() {
    const value = readLineSync.question('Qual o volume? ');
    const baseUnit = readLineSync.question('Qual a unidade base? ');
    const baseUnitForConversion = readLineSync.question('Qual a unidade para conversão? ');
    const result = convert(value, baseUnit, baseUnitForConversion);
    console.log(`${value}${baseUnit} é igual a ${result}${baseUnitForConversion}`);
}
exports.exec = exec;
;
exec();
