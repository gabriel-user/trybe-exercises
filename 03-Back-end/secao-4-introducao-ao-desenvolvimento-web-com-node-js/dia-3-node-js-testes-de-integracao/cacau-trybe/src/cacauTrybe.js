const fs = require('fs').promises;
const { join } = require('path');

const CHOCOLATES_FILE_PATH = join(__dirname, '/files/cacauTrybeFile.json');

const getAllChocolates = async () => {
  const allChocolates = await fs.readFile(CHOCOLATES_FILE_PATH, 'utf-8');
  return JSON.parse(allChocolates);
};

module.exports = { getAllChocolates };