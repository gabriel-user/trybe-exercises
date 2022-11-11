const { join } = require('path');
const { readFileJson } = require('./utils/fsUtils');

const CHOCOLATES_FILE_PATH = join(__dirname, '/files/cacauTrybeFile.json');

const getAllChocolates = async () => {
  const cacauTrybe = await readFileJson(CHOCOLATES_FILE_PATH, 'utf-8');
  return cacauTrybe.chocolates;
};

module.exports = { getAllChocolates };