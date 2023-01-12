const units: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex: number = units.indexOf(fromUnit);
  const toIndex: number = units.indexOf(toUnit);
  const exponent: number = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
};