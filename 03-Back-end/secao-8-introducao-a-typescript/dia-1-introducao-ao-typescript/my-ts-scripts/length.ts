const readLineSync = require('readline-sync');

const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex: number = units.indexOf(fromUnit);
  const toIndex: number = units.indexOf(toUnit);
  const exponent: number = toIndex - fromIndex;

  return value * Math.pow(10, exponent)
};

export function exec():void {
  const value = readLineSync.question('Qual o comprimento? ');
  const baseUnit = readLineSync.question('Qual a unidade base? ');
  const baseUnitForConversion = readLineSync.question('Qual a unidade para conversão? ');

  const result: number = convert(value, baseUnit, baseUnitForConversion);
  console.log(`${value}${baseUnit} é igual a ${result}${baseUnitForConversion}`);
};

exec();