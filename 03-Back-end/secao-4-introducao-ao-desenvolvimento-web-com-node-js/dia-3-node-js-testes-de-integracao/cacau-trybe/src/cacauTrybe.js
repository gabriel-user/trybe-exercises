const { join } = require('path');
const { readFileJson, writeFileJson } = require('./utils/fsUtils');

const CHOCOLATES_FILE_PATH = join(__dirname, '/files/cacauTrybeFile.json');

const getAllChocolates = async () => {
  const cacauTrybe = await readFileJson(CHOCOLATES_FILE_PATH, 'utf-8');
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const chocolates = await getAllChocolates();
  const chocolate = chocolates.find((choc) => Number(choc.id) === id);
  return chocolate;
};

const getAllChocolatesByBrandId = async (brandId) => {
  const cacauTrybe = await getAllChocolates();
  const chocolatesByBrand = await cacauTrybe.filter((chocolate) => {
    return Number(chocolate.brandId) === Number(brandId);
  });

  return chocolatesByBrand;
};

const getAllChocolatesBySerchTerm = async (seachTerm) => {
  const cacauTrybe = await getAllChocolates();
  const chocolatesBySearchTerm = cacauTrybe.filter(({ name }) => {
    return (name.toLowerCase()).includes(seachTerm.toLowerCase());
  });

  if (chocolatesBySearchTerm.length === 0) return null;
  
  return chocolatesBySearchTerm;
};

const updateChocolate = async (id, body) => {
  const cacauTrybe = await readFileJson(CHOCOLATES_FILE_PATH);
  const chocolate = cacauTrybe.chocolates.find((choc) => {
    return Number(choc.id) === Number(id);
  });
  
  if (chocolate) {
    const indexOfChocolate = await cacauTrybe.chocolates.indexOf(chocolate);
    const newChocolate = { ...chocolate, ...body };
    cacauTrybe.chocolates.splice(indexOfChocolate, 1, newChocolate);
  
    await writeFileJson(CHOCOLATES_FILE_PATH, cacauTrybe);
    return newChocolate;
  };
  
  return false;
};

module.exports = { 
  getAllChocolates,
  getAllChocolatesByBrandId,
  getChocolateById,
  getAllChocolatesBySerchTerm,
  updateChocolate
};