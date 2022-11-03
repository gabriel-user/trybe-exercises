const path = require('path');
const { readJsonFile, writeJsonFile } = require('./utils/fsFunctions');

const SIMPSONS_PATH = path.resolve(__dirname, './simpsons.json');
const SIMPSONS_FAMILY_PATH = path.resolve(__dirname, './simpsonsFamily.json');

const printAllSimpsons = async () => {
  const allSimpsons = await readJsonFile(SIMPSONS_PATH);
  allSimpsons.forEach(({ id, name }) => console.log(`${id} - ${name}.`));
};

const getSimpsonById = async (id) => {
  const allSimpsons = await readJsonFile(SIMPSONS_PATH);
  const isSimpson = allSimpsons.find(
    (simpson) => Number(simpson.id) === Number(id)
  );

  if (!isSimpson) throw new Error('Id não encontrado.');
  return isSimpson;
};

const filterSimpsons = async () => {
  const allSimpsons = await readJsonFile(SIMPSONS_PATH);
  const newSimpsonsArray = allSimpsons.filter(({ id }) => id !== '10' && id !== '6');

  await writeSimpsons(SIMPSONS_PATH, JSON.stringify(newSimpsonsArray));
};

const createSimpsonsFamily = async () => {
  const familyIds = [1, 2, 3, 4];
  const allSimpsons = await readJsonFile(SIMPSONS_PATH);
  const simpsonsFamily = allSimpsons.filter(({ id }) => Number(id) in familyIds);

  await writeJsonFile(SIMPSONS_FAMILY_PATH, JSON.stringify(simpsonsFamily));
};

const addNelsonToFamily = async () => {
  const simpsonsFamily = await readJsonFile(SIMPSONS_FAMILY_PATH);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await writeJsonFile(SIMPSONS_FAMILY_PATH, JSON.stringify(simpsonsFamily));
};

const replaceNelson = async () => {
  const simpsonsFamily = await readJsonFile(SIMPSONS_FAMILY_PATH);
  const simpsonsWithoutNelson = simpsonsFamily.filter(({ id }) => id !== '8');
  const simpsonsWithMaggie = simpsonsWithoutNelson.push(
    { id: '15', name: 'Maggie Simpson' }
  );

  await writeJsonFile(SIMPSONS_FAMILY_PATH, JSON.stringify(simpsonsFamily));
};
