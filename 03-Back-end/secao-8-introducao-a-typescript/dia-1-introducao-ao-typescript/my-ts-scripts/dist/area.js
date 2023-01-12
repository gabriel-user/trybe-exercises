"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
exports.convert = convert;
;
