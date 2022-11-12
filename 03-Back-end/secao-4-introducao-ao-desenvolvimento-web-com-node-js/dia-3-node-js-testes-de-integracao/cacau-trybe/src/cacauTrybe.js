const { join } = require('path');
const { readFileJson } = require('./utils/fsUtils');

const CHOCOLATES_FILE_PATH = join(__dirname, '/files/cacauTrybeFile.json');

const getAllChocolates = async () => {
  const cacauTrybe = await readFileJson(CHOCOLATES_FILE_PATH, 'utf-8');
  return cacauTrybe.chocolates;
};

const getAllChocolatesByBrandId = async (brandId) => {
  const cacauTrybe = await getAllChocolates();
  const chocolatesByBrand = await cacauTrybe.filter((chocolate) => {
    return Number(chocolate.brandId) === Number(brandId);
  });

  return chocolatesByBrand;
};

module.exports = { getAllChocolates, getAllChocolatesByBrandId };