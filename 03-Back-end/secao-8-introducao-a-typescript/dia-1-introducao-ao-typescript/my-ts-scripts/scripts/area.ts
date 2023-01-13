const readLineSync = require('readline-sync');

const units: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex: number = units.indexOf(fromUnit);
  const toIndex: number = units.indexOf(toUnit);
  const exponent: number = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
};

export function exec():void {
  const value = readLineSync.question('Qual a área? ');
  const baseUnit = readLineSync.question('Qual a unidade base? ');
  const baseUnitForConversion = readLineSync.question('Qual a unidade para conversão? ');

  const result: number = convert(value, baseUnit, baseUnitForConversion);
  console.log(`${value}${baseUnit} é igual a ${result}${baseUnitForConversion}`);
};

exec();