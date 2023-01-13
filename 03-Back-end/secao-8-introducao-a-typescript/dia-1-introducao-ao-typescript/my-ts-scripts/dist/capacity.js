"use strict";
exports.__esModule = true;
exports.exec = exports.convert = void 0;
var readLineSync = require('readline-sync');
var units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
function exec() {
    var value = readLineSync.question('Qual a capacidade? ');
    var baseUnit = readLineSync.question('Qual a unidade base? ');
    var baseUnitForConversion = readLineSync.question('Qual a unidade para conversão? ');
    var result = convert(value, baseUnit, baseUnitForConversion);
    console.log("" + value + baseUnit + " \u00E9 igual a " + result + baseUnitForConversion);
}
exports.exec = exec;
;
exec();
